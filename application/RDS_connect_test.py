#RDSテスト用
import mysql.connector
conn=mysql.connector.connect(user='admin',password='alicepass',host='rpa-navi01.cfkjffrk4iv5.ap-northeast-1.rds.amazonaws.com',database='RPA_NAVI',port=3306)
conn.ping(reconnect=True)
cur = conn.cursor(buffered=True)
cur.execute('SELECT * FROM PRODUCT_CLASS_MASTER_TABLE')
print(cur.fetchall())
cur.close()
conn.commit()
conn.close()
