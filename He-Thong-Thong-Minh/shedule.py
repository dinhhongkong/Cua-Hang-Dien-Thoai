import schedule
import time
import tensorflow as tf
import numpy as np
from datetime import timedelta
import pyodbc
import pandas as pd
from sklearn.model_selection import train_test_split

server = 'LAPTOP-DOUILK3I'
database = 'CUA_HANG_DIEN_THOAI'
username = 'sa'
password = '123456'
conn = pyodbc.connect(
    f'DRIVER={{SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}')


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


def train_model():
    model = tf.keras.models.load_model("Recommendation/mymodel.h5")
    model.save("Recommendation/backupmodel.h5")
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


def job():
    print("Training model...")
    train_model()
    print("Training completed.")


schedule.every(15).minute.do(job)

# Lặp vô hạn để duy trì lịch chạy
while True:
    schedule.run_pending()
    time.sleep(1)  # Đợi 1 giây
