import pyodbc

SERVER = 'KONGDINH'
DATABASE = 'CUA_HANG_DIEN_THOAI'
USERNAME = 'sa'
PASSWORD = 'a'

connectionString = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={SERVER};DATABASE={DATABASE};UID={USERNAME};PWD={PASSWORD}'


def Get_device_name(device_name):
    conn = pyodbc.connect(connectionString)
    SQL_QUERY = f"SELECT TOP 5 *  FROM devices WHERE device_name LIKE '%{device_name}%'"
    cursor = conn.cursor()
    cursor.execute(SQL_QUERY)

    query = []
    for r in cursor.fetchall():
        device_info = {
            'device_name': r.device_name,
            'os': r.os,
            'ram': r.ram,
            'cpu': r.chipset,
            'storage': r.storage,
            'battery_size': r.battery_size
        }
        query.append(device_info)

    conn.close()

    return query

def Get_price(device_name):
    conn = pyodbc.connect(connectionString)
    SQL_QUERY = f"SELECT gia  FROM devices WHERE device_name = '{device_name}'"
    cursor = conn.cursor()
    cursor.execute(SQL_QUERY)
    row = cursor.fetchone()
    conn.close()
    if row:
        gia = int(row.gia)  # Chuyển giá thành số nguyên
        formatted_gia = "{:,}".format(gia)  # Định dạng giá với dấu phẩy hàng nghìn
        return formatted_gia
    else:
        return None

if __name__ == "__main__":
    # print(Get_price("Apple iPhone 8"))
    print(Get_device_name("Apple iPhone 8")[0]['device_name'])



