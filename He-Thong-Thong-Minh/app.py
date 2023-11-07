from flask import Flask, jsonify, request
import requests

import pyodbc
import pandas as pd
from gensim.models import Word2Vec
from sklearn.cluster import KMeans
from sklearn.metrics import pairwise_distances
import matplotlib.pyplot as plt
import tensorflow as tf
import numpy as np
from yellowbrick.cluster import KElbowVisualizer
from sklearn.preprocessing import LabelEncoder
from datetime import timedelta
from sklearn.model_selection import train_test_split
import re
server = 'LAPTOP-DOUILK3I'
database = 'CUA_HANG_DIEN_THOAI'
username = 'sa'
password = '123456'
conn = pyodbc.connect(
    f'DRIVER={{SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}')


def process_storage(text):
    if "GB" in text:
        # Trường hợp có "GB" (gigabyte)
        numbers = re.findall(r'\d+', text)
        if numbers:
            return int(numbers[0])  # Lấy giá trị số đầu tiên
    elif "MB" in text:
        # Trường hợp có "MB" (megabyte)
        numbers = re.findall(r'\d+', text)
        if numbers:
            return int(numbers[0]) / 1024  # Chuyển MB thành GB
    elif "TB" in text:
        # Trường hợp có "TB" (terabyte)
        numbers = re.findall(r'\d+', text)
        if numbers:
            return int(numbers[0]) * 1024  # Chuyển TB thành GB
    elif "Unspecified" in text or "No card slot" in text:
        # Trường hợp không xác định hoặc không có khe cắm thẻ
        return 0
    else:
        # Trường hợp không xác định
        return 0


def extract_ram(text):
    # Loại bỏ dấu &nbsp;
    text = text.replace('&nbsp;', '0')

    # Tìm các con số và dấu '/' trong chuỗi
    matches = re.findall(
        r'(\d+(?:\.\d+)?)\s?(?:\/)?\s?(\d+(?:\.\d+)?)?\s?(GB|MB)?', text)

    # Tạo danh sách các giá trị RAM chuyển đổi thành số
    ram_values = []
    for match in matches:
        val1 = float(match[0]) if match[0] else 0
        val2 = float(match[1]) if match[1] else 0
        unit = match[2]

        if unit == 'GB':
            val1 *= 1024  # Chuyển đổi GB thành MB

        if val2 != 0:
            # Nếu tồn tại phép chia
            val1 = val1 / val2

        ram_values.append(val1)

    # Tìm giá trị RAM lớn nhất trong danh sách
    max_ram = max(ram_values)

    return max_ram


def extract_battery(text):
    # Loại bỏ dấu &nbsp;
    text = text.replace('&nbsp;', '0')

    # Tìm các con số và "mAh" trong chuỗi
    match = re.search(r'(\d+)\s*mAh', text)

    if match:
        return int(match.group(1))
    else:
        return 0


RASA_API_URL = 'http://localhost:5005/webhooks/rest/webhook'
app = Flask(__name__)

# on the terminal type: curl http://127.0.0.1:5000/


@app.route('/webhook', methods=['POST'])
def webhook():
    user_message = request.json
    rasa_response = requests.post(RASA_API_URL, json={
                                  "sender": user_message["sender"], "message": user_message["message"].lower()})
    if rasa_response.status_code == 200:
        rasa_json = rasa_response.json()
        if rasa_json and isinstance(rasa_json, list) and len(rasa_json) > 0:
            bot_response = rasa_json[0]['text']
        else:
            bot_response = "Xin lỗi em không hiểu ý anh chị, anh chị có thể nhắc lại câu hỏi hoặc đổi câu hỏi khác được không ạ"
    else:
        bot_response = "Có lỗi xảy ra khi gửi yêu cầu đến Rasa API"
    return jsonify({'response': bot_response})


def load_dulieu():
    query = 'SELECT * FROM devices'
    df = pd.read_sql(query, conn)
    df.to_csv('Recommendation/data.csv', index=False)


def ma_hoa(dataall):
    data = pd.read_csv('Recommendation/data.csv')
    data = data[['device_name', 'os', 'specifications', 'chipset']]
    # Thay thế các giá trị NaN bằng 0 hoặc giá trị khác
    data = data.fillna("0")
    data = data.drop_duplicates()  # Loại bỏ các dòng trùng lặp
    all_words = set()
    for col in data.columns:
        if data[col].dtype == 'object':
            for row in data[col]:
                if isinstance(row, str):
                    all_words.update(row.split())
        else:
            all_words.update(data[col].astype(str))
    model = Word2Vec(sentences=list(all_words), vector_size=100,
                     window=5, min_count=1, sg=0)
    encoded_data = pd.DataFrame()
    for col in data.columns:
        if data[col].dtype == 'object':
            col_vectors = data[col].str.split().apply(lambda words: [model.wv[word] for word in words if word in model.wv]).apply(
                lambda vectors: sum(vectors) if vectors else [0.0] * 100)
            col_vectors = col_vectors.apply(lambda vector: pd.Series(vector))
            encoded_data = pd.concat([encoded_data, col_vectors], axis=1)
    t = dataall['body']
    body = []
    for i in t:
        if pd.notna(i):
            numbers = [float(number)
                       for number in re.findall(r'\d+\.\d+|\d+', i)]
            body.append(numbers)
        else:
            body.append([0])
    rs = []
    for sublist in body:
        if len(sublist) > 1:
            rs.append(sublist[0]*sublist[1])
        else:
            rs.append(sublist[0])
    df_body = pd.DataFrame(rs, columns=['body'])

    t = dataall['storage']
    storage = []
    for i in t:
        storage.append(process_storage(i.split(',')[0]))
    df_storage = pd.DataFrame(storage, columns=['storage'])

    t = dataall['display_size']
    display_size = [float(re.search(r'\d+\.\d+', s).group())
                    for s in t if re.search(r'\d+\.\d+', s)]
    df_display_size = pd.DataFrame(display_size, columns=['display_size'])

    t = dataall['display_resolution']
    display_resolution = []
    pattern = r'(\d+)x(\d+) pixels'
    for item in t:
        match = re.search(pattern, item)
        if match:
            # Chuyển đổi con số thành số nguyên
            width, height = map(int, match.groups())
            display_resolution.append(width*height)
    df_display_resolution = pd.DataFrame(
        display_resolution, columns=['display_resolution'])

    t = dataall['camera_pixels']
    camera_pixels = [0 if val.strip() == 'NO' else float(val.split()[0])
                     for val in t]
    df_camera_pixels = pd.DataFrame(
        camera_pixels, columns=['camera_pixels'])

    t = dataall['video_pixels']
    video_pixels = []
    mapping = {
        '2160p': 2160,
        '720p': 720,
        '1080p': 1080,
        'No video recorder': 0,
        'Video recorder': 0,
        '288p': 288,
        '480p': 480,
        '4320p': 4320,
        '3240p': 3240,
        '1440p': 1440,
        '240p': 240,
    }
    t = [mapping[val] if val in mapping else val for val in t]
    video_pixels = [0 if pd.isna(val) else val for val in t]
    df_video_pixels = pd.DataFrame(
        video_pixels, columns=['video_pixels'])

    t = dataall['ram']
    ram = [extract_ram(text) for text in t]

    df_ram = pd.DataFrame(
        ram, columns=['ram'])

    t = dataall['battery_size']
    battery_size = [extract_battery(text) for text in t]
    df_battery_size = pd.DataFrame(
        battery_size, columns=['battery_size'])
    t = dataall['battery_type']
    label_encoder = LabelEncoder()
    battery_type = label_encoder.fit_transform(t)
    df_battery_type = pd.DataFrame(
        battery_type, columns=['battery_type'])

    encoded_data = pd.concat([encoded_data, df_body], axis=1)
    encoded_data = pd.concat([encoded_data, df_battery_type], axis=1)
    encoded_data = pd.concat([encoded_data, df_battery_size], axis=1)
    encoded_data = pd.concat([encoded_data, df_camera_pixels], axis=1)
    encoded_data = pd.concat([encoded_data, df_display_resolution], axis=1)
    encoded_data = pd.concat([encoded_data, df_ram], axis=1)
    encoded_data = pd.concat([encoded_data, df_video_pixels], axis=1)
    encoded_data = pd.concat([encoded_data, df_storage], axis=1)
    encoded_data = pd.concat([encoded_data, df_display_size], axis=1)
    encoded_data = pd.concat([encoded_data, dataall['gia']], axis=1)
    encoded_data = pd.concat([encoded_data, dataall['cluster']], axis=1)
    return encoded_data


@app.route('/sanphamcolienquan', methods=['GET'])
def recommendations1():
    product_id = request.args.get('product_id')
    print(product_id)
    if product_id is None:
        return
    load_dulieu()
    dataall = pd.read_csv('Recommendation/data.csv')
    product_index = dataall.loc[dataall['id'] == int(product_id)].index[0]
    encoded_data = ma_hoa(dataall)
    data_array = encoded_data.to_numpy()
    reference_product = data_array[product_index]
    cluster_products = encoded_data[encoded_data['cluster']
                                    == reference_product[-1]]
    cluster_products = cluster_products[cluster_products.index != product_index]
    cluster_products_2d = cluster_products.iloc[:, :-1].values.copy()
    reference_product_2d = reference_product[:-1]
    reference_product_2d = reference_product_2d.reshape(1, -1).copy()
    similarities = pairwise_distances(
        reference_product_2d, cluster_products_2d, metric='euclidean')
    sorted_indices = np.argsort(similarities.flatten())
    top_n_indices = sorted_indices[:5]
    top_n_products = cluster_products.iloc[top_n_indices]
    related_products = top_n_products.index
    related_products_id = []
    for i in related_products:
        related_products_id.append(int(dataall.iloc[i]['id']))
    print(related_products_id)
    return jsonify(related_products_id)


def load_data():
    query = 'SELECT * FROM user_history'
    df = pd.read_sql(query, conn)
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df = df.sort_values(
        ['user_id', 'item_id', 'timestamp'])

    # Tính thời gian giữa các lần xem cho cùng một sản phẩm của mỗi người dùng
    df['time_diff'] = df.groupby(
        ['user_id', 'item_id'])['timestamp'].diff()
    df['rating'] = 1
    df.loc[df['buy'] == 1, 'rating'] += 1
    # Điều chỉnh xếp hạng dựa vào thời gian giữa các lần xem
    df['rating'] += df.groupby(['user_id', 'item_id'])['time_diff'].apply(
        lambda x: (x < timedelta(hours=1)).cumsum())

    # Điều chỉnh xếp hạng dựa trên số lần xem
    df['rating'] += df.groupby(
        ['user_id', 'item_id'])['item_id'].cumcount()
    df.to_csv('Recommendation/user_history.csv')


def get_user_history():
    query = 'SELECT * FROM user_history'
    df = pd.read_sql(query, conn)
    return df


def get_devices_all():
    query = 'SELECT id FROM devices'
    df = pd.read_sql(query, conn)
    return df


def len_devices():
    cursor = conn.cursor()
    query = 'SELECT COUNT(*) FROM devices'
    cursor.execute(query)
    row_count = cursor.fetchone()[0]
    cursor.close()
    return int(row_count)


def get_product_interact(user_id):
    query = 'SELECT item_id FROM user_history where id = ?'
    cursor = conn.cursor()
    cursor.execute(query, (user_id,))
    result = cursor.fetchall()
    conn.close()
    item_ids_user_inter = [row[0] for row in result]
    return item_ids_user_inter


@app.route('/trainmodel', methods=['GET'])
def train_model():
    load_data()
    data = pd.read_csv('Recommendation/user_history.csv')
    train_data, test_data = train_test_split(
        data, test_size=0.2, random_state=42)
    user_ids = train_data['user_id'].unique()
    item_ids = train_data['item_id'].unique()
    user_to_index = {user_id: i for i, user_id in enumerate(user_ids)}
    item_to_index = {item_id: i for i, item_id in enumerate(item_ids)}
    train_user_ids = train_data['user_id'].map(user_to_index)
    train_item_ids = train_data['item_id'].map(item_to_index)
    trainRatings = np.array(train_data['rating'])
    test_user_ids = test_data['user_id'].map(user_to_index)
    test_item_ids = test_data['item_id'].map(item_to_index)
    testRatings = np.array(test_data['rating'])
    user_input = tf.keras.layers.Input(shape=(1,), name='user_input')
    item_input = tf.keras.layers.Input(shape=(1,), name='item_input')
    user_embedding = tf.keras.layers.Embedding(
        input_dim=len(train_user_ids), output_dim=64)(user_input)
    item_embedding = tf.keras.layers.Embedding(
        input_dim=len(train_item_ids), output_dim=64)(item_input)

    user_flatten = tf.keras.layers.Flatten()(user_embedding)
    item_flatten = tf.keras.layers.Flatten()(item_embedding)

    concat = tf.keras.layers.Concatenate()([user_flatten, item_flatten])

    hidden1 = tf.keras.layers.Dense(64, activation='relu')(concat)
    hidden2 = tf.keras.layers.Dense(32, activation='relu')(hidden1)
    output = tf.keras.layers.Dense(1, activation='sigmoid')(hidden2)
    model = tf.keras.models.Model(
        inputs=[user_input, item_input], outputs=output)
    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit([train_user_ids, train_item_ids], trainRatings, epochs=10,
              batch_size=64, validation_data=([test_user_ids, test_item_ids], testRatings))
    model.save('Recommendation/mymodel.h5')
    return jsonify({"train": "thanhcong"})


@app.route('/cothebanquantam', methods=['GET'])
def recommendations():
    user_id = int(request.args.get('user_id'))
    product_id = int(request.args.get('product_id'))
    cluster = pd.read_csv('Recommendation/data.csv')
    product = cluster[cluster['id'] == product_id]
    cluster_product = product['cluster']
    data = get_user_history()
    dataitem = data['item_id'].unique()
    item_to_index = {item_id: i for i, item_id in enumerate(dataitem)}
    unique_user_ids = data['user_id'].unique()
    user_to_indexdata = {user_id: index for index,
                         user_id in enumerate(unique_user_ids)}
    user_index_to_recommend = user_to_indexdata.get(user_id)
    index_to_itemdata = {i: item_id for i, item_id in enumerate(dataitem)}
    model = tf.keras.models.load_model("Recommendation/mymodel.h5")
    if user_index_to_recommend is not None:
        # Số lượng sản phẩm cần đề xuất
        k = 5  # Điều chỉnh theo số lượng sản phẩm bạn muốn đề xuất

        filtered_data = cluster[cluster['cluster']
                                == cluster_product.iloc[0]]
        items_with_cluster = filtered_data['id'].unique()
        filtered_data = data[data['item_id'].isin(items_with_cluster)]
        items_with_cluster = filtered_data['item_id'].unique()
        index_of_cluster = []
        for i in items_with_cluster:
            index_of_cluster.append(item_to_index[i])
        all_items_to_recommend = np.intersect1d(
            np.arange(len(dataitem)), np.array(index_of_cluster))
        if len(all_items_to_recommend) > 0:
            # Sử dụng mô hình NCF để dự đoán xác suất tương tác cho các sản phẩm chưa tương tác
            predicted_probabilities = model.predict([np.array(
                [user_index_to_recommend] * len(all_items_to_recommend)), all_items_to_recommend])

            # Sắp xếp các sản phẩm theo xác suất giảm dần
            sorted_indices = np.argsort(predicted_probabilities, axis=0)[::-1]
            top_k_recommendations = all_items_to_recommend[sorted_indices][:k]
            recommended_item_ids = []
            for i in top_k_recommendations:
                recommended_item_ids.append(int(index_to_itemdata[i[0]]))
            print(recommended_item_ids)
            return jsonify({"related_products_id": recommended_item_ids})
        else:
            return jsonify({"related_products_id": "khong co san pham de xuat cho nguoi dung nay"})
    else:
        return jsonify({"related_products_id": "nguoi dung khong ton tai trong tap huan luyen"})


if __name__ == '__main__':
    app.run(debug=True)
