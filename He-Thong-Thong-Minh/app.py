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
import random
from datetime import timedelta
from sklearn.model_selection import train_test_split

server = 'KONGDINH'
database = 'CUA_HANG_DIEN_THOAI'
username = 'sa'
password = 'a'
conn = pyodbc.connect(
    f'DRIVER={{SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}')

RASA_API_URL = 'http://localhost:5005/webhooks/rest/webhook'
app = Flask(__name__)

# on the terminal type: curl http://127.0.0.1:5000/
@app.route('/webhook', methods=['POST'])
def webhook():
    user_message = request.json
    rasa_response = requests.post(RASA_API_URL, json={"sender": user_message["sender"], "message": user_message["message"].lower()})

    bot_response = rasa_response.json()[0]['text'] if rasa_response.json else "Xin lỗi em không hiểu ý anh chị, anh chị có thể nhắc lại câu hỏi hoặc đổi câu hỏi khác được không ạ"
    return jsonify({'response': bot_response})


def load_dulieu():
    query = 'SELECT * FROM devices'
    df = pd.read_sql(query, conn)
    df.to_csv('Recommendation/data.csv', index=False)


def ma_hoa(dataall):
    data = pd.read_csv('Recommendation/data.csv')
    data = data.drop(['url_hash', 'id', 'gia', 'cluster'], axis=1)
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
            col_vectors = data[col].str.split().apply(
                lambda words: [model.wv[word] for word in words if word in model.wv]).apply(
                lambda vectors: sum(vectors) if vectors else [0.0] * 100)
            col_vectors = col_vectors.apply(lambda vector: pd.Series(vector))
            encoded_data = pd.concat([encoded_data, col_vectors], axis=1)
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
    print(product_index)
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
    data = get_user_history()
    dataitem = data['item_id'].unique()
    unique_user_ids = data['user_id'].unique()
    user_to_indexdata = {user_id: index for index,
    user_id in enumerate(unique_user_ids)}
    user_index_to_recommend = user_to_indexdata.get(user_id)
    index_to_itemdata = {i: item_id for i, item_id in enumerate(dataitem)}
    model = tf.keras.models.load_model("Recommendation/mymodel.h5")
    if user_index_to_recommend is not None:
        # Số lượng sản phẩm cần đề xuất
        k = 5  # Điều chỉnh theo số lượng sản phẩm bạn muốn đề xuất

        all_items_to_recommend = np.arange(len_devices())
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
