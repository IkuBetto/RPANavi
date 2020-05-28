
import pandas as pd
from datetime import datetime, date, timedelta
import mysql.connector
import random
conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
conn.ping(reconnect=True)
cur = conn.cursor()
list=[]
item=["PC","カメラ","家電"]
dotcom=[]
rakuten=[]
amazon=[]
yahoo=[]
item2=[]
for i in range(500):
	sagaku=i*100
	list.append(sagaku)
	r=random.randint(0,2)
	d=random.randint(1,10)
	k=random.randint(1,10)
	a=random.randint(1,10)
	y=random.randint(1,10)
	item2.append(item[r])
	dotcom.append(d*10000)
	rakuten.append(k*10000)
	amazon.append(a*10000)
	yahoo.append(a*10000)


list2=random.sample(list,500)
print(list2)
print(item2)
print(dotcom)
print(rakuten)
print(amazon)
print(yahoo)



for i in range(500):
	cur.execute('INSERT INTO db_flask values(%s,%s,%s,%s,%s,%s)',(list2[i],item2[i],dotcom[i],rakuten[i],amazon[i],yahoo[i],))

cur.close()
conn.commit()
conn.close()
