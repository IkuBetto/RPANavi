from flask import Flask,render_template,request,session,redirect,url_for 
import pandas as pd
import datetime
import mysql.connector
#おまじない
app=Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
update=[]
for i in range(100):
	update.append(None)
def _is_account_valid(input_username,index):
	try:
		#データベースの情報
		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		cur = conn.cursor()
		conn.ping(reconnect=True)
		cur.execute('select * from user')

		id_and_pass = cur.fetchall()
		
		#パスワードにはちゃんとした値が入っているか？
		

		#データベースとの接続を切ります。
		
		cur.close()
		conn.commit()
		conn.close()
		#パスワードがあっていれば、trueを返します
		if str(id_and_pass[0][index]) == str(input_username):
			return True
			
		else:
			return False
	except:
		print("入力内容が間違った時のエラー")
		return False

@app.route("/")
def login_go():
	
	if 'user_id' in session:
		
		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		conn.ping(reconnect=True)
		cur = conn.cursor()
		cur.execute('select * from db_flask order by sagaku desc limit 100')
		amazon_url="https://www.amazon.co.jp/Dell-Inspiron-11-3180-20Q11G/dp/B07QVHYV8M/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=PC&qid=1565595169&s=gateway&smid=AN1VRQENFRJN5&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOU5JN1JFVkhNSEFNJmVuY3J5cHRlZElkPUEwMzU3NDA2VEs0T0dZTVVBSjFTJmVuY3J5cHRlZEFkSWQ9QTM1UFI2REdKUFVLME8md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
		data_sagaku=cur.fetchall()
		lst=list(data_sagaku)
		selectbox_name=["差額順位","PC順位","カメラ順位","家電順位"]
		selectbox_value=["./index","./pc","./camera","./home_appliance"]
		selectbox_length=len(selectbox_name)
		cur.close()
		conn.commit()
		conn.close()
		return render_template("index2.html",lst=lst,selectbox_name=selectbox_name,selectbox_value=selectbox_value,selectbox_length=selectbox_length,update=update,amazon_url=amazon_url)
	return redirect('/login')
@app.route('/login', methods=['GET', 'POST'])
def login():
	#エラーメッセージはtitleに入れます
	title = []
	#入力内容が正しければindex()に移ります。
	if request.method == 'POST':
		
		if _is_account_valid(request.form['userid'],0):
			if _is_account_valid(request.form['password'],1):
			
				conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
				cur= conn.cursor()
				cur.execute('select userID from user where userID= "' + str(request.form['userid']) + '";')
				user_id = cur.fetchone()
				#import logging
				#printと同じ
				#appendpp.logger.warning(user_id)
				print(user_id[0][0])
				session['user_id'] = user_id[0][0]
				return redirect(url_for('login_go'))
			else:
				title.append("パスワードが間違っています")
				return render_template('index.html',message=title[0])
		else:
			title.append("ユーザーIDが間違っています")
			return render_template('index.html',message=title[0])
	#正しくなければもう一度loginページを表示します

	return render_template('index.html')
@app.route('/logout', methods=['GET'])
def logout():
	#セッションからユーザ名を取り除く (ログアウトの状態にする)
	session.pop('user_id',None)
	# ログインページにリダイレクトする
	return redirect(url_for('login'))

@app.route("/index")
def index():
	

		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		conn.ping(reconnect=True)
		cur = conn.cursor()
		cur.execute('select * from db_flask order by sagaku desc limit 100')
		amazon_url="https://www.amazon.co.jp/Dell-Inspiron-11-3180-20Q11G/dp/B07QVHYV8M/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=PC&qid=1565595169&s=gateway&smid=AN1VRQENFRJN5&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOU5JN1JFVkhNSEFNJmVuY3J5cHRlZElkPUEwMzU3NDA2VEs0T0dZTVVBSjFTJmVuY3J5cHRlZEFkSWQ9QTM1UFI2REdKUFVLME8md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
		data_sagaku=cur.fetchall()
		lst=list(data_sagaku)
		selectbox_name=["差額順位","PC順位","カメラ順位","家電順位"]
		selectbox_value=["./index","./pc","./camera","./home_appliance"]
		selectbox_length=len(selectbox_name)
		cur.close()
		conn.commit()
		conn.close()

		return render_template("index2.html",lst=lst,selectbox_name=selectbox_name,selectbox_value=selectbox_value,selectbox_length=selectbox_length,update=update,amazon_url=amazon_url)
@app.route("/pc",methods=["GET","POST"])
def pc():
		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		conn.ping(reconnect=True)
		cur = conn.cursor()
		cur.execute('select * from db_flask where item="PC" order by sagaku desc limit 100')
		data_sagaku=cur.fetchall()
		lst=list(data_sagaku)
		cur.close()
		conn.commit()
		conn.close()
		selectbox_name=["PC順位","差額順位","カメラ順位","家電順位"]
		selectbox_value=["./pc","./index","./camera","./home_appliance"]
		selectbox_length=len(selectbox_name)
		return render_template("index2.html",lst=lst,selectbox_name=selectbox_name,selectbox_value=selectbox_value,selectbox_length=selectbox_length,update=update)
@app.route("/camera",methods=["GET","POST"])
def camera():
		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		conn.ping(reconnect=True)
		cur = conn.cursor()
		cur.execute('select * from db_flask where item="カメラ" order by sagaku desc limit 100')
		data_sagaku=cur.fetchall()
		lst=list(data_sagaku)
		cur.close()
		conn.commit()
		conn.close()
		selectbox_name=["カメラ順位","差額順位","PC順位","家電順位"]
		selectbox_value=["./camera","./index","./pc","./home_appliance"]
		selectbox_length=len(selectbox_name)
		return render_template("index2.html",lst=lst,selectbox_name=selectbox_name,selectbox_value=selectbox_value,selectbox_length=selectbox_length,update=update)
@app.route("/home_appliance",methods=["GET","POST"])
def home_appliance():
		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		conn.ping(reconnect=True)
		cur = conn.cursor()
		cur.execute('select * from db_flask where item="家電" order by sagaku desc limit 100')
		data_sagaku=cur.fetchall()
		lst=list(data_sagaku)
		cur.close()
		conn.commit()
		conn.close()
		selectbox_name=["家電順位","差額順位","PC順位","カメラ順位"]
		selectbox_value=["./home_appliance","./index","./pc","./camera"]
		selectbox_length=len(selectbox_name)
		return render_template("index2.html",lst=lst,selectbox_name=selectbox_name,selectbox_value=selectbox_value,selectbox_length=selectbox_length,update=update)
@app.route("/get",methods=["GET","POST"])
def get():
	if request.method=="POST":
		conn=mysql.connector.connect(user='root',host='localhost',database='sampleDB')
		conn.ping(reconnect=True)
		cur = conn.cursor()
		selectbox_selected=request.form["select-sort"]
		if(selectbox_selected=="./index"):
			cur.execute('select * from db_flask order by sagaku desc limit 100')
			selectbox_name=["差額順位","PC順位","カメラ順位","家電順位"]
			selectbox_value=["./index","./pc","./camera","./home_appliance"]
			selectbox_length=len(selectbox_name)
		elif(selectbox_selected=="./pc"):
			cur.execute('select * from db_flask where item="PC" order by sagaku desc limit 100')
			selectbox_name=["PC順位","差額順位","カメラ順位","家電順位"]
			selectbox_value=["./pc","./index","./camera","./home_appliance"]
			selectbox_length=len(selectbox_name)
		elif(selectbox_selected=="./camera"):
			cur.execute('select * from db_flask where item="カメラ" order by sagaku desc limit 100')
			selectbox_name=["カメラ順位","差額順位","PC順位","家電順位"]
			selectbox_value=["./camera","./index","./pc","./home_appliance"]
			selectbox_length=len(selectbox_name)
		elif(selectbox_selected=="./home_appliance"):
			cur.execute('select * from db_flask where item="家電" order by sagaku desc limit 100')
			selectbox_name=["家電順位","差額順位","PC順位","カメラ順位"]
			selectbox_value=["./home_appliance","./index","./pc","./camera"]
			selectbox_length=len(selectbox_name)




	
		data_sagaku=cur.fetchall()
		lst=list(data_sagaku)

		for i in range(100):
			if(request.form["save"]=="save_value_"+str(i)):
					index=i

		sagaku=request.form["sagaku_"+str(index)]
		item=request.form["item_name_"+str(index)]
		dotcom=request.form["dotcom_"+str(index)]
		rakuten=request.form["rakuten_"+str(index)]
		r_count=request.form["r_count_"+str(index)]
		amazon=request.form["amazon_"+str(index)]
		a_count=request.form["a_count_"+str(index)]
		yahoo=request.form["yahoo_"+str(index)]
		y_count=request.form["y_count_"+str(index)]
		sell_text=request.form["sell_text_"+str(index)]
		s_count=request.form["s_count_"+str(index)]
		update_time=datetime.datetime.now().strftime("%Y/%m/%d %H:%M")
		for i in range(100):
			if(i==index):
				update[i]=update_time

		cur.execute('INSERT INTO savedata values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',(sagaku,item,dotcom,rakuten,r_count,amazon,a_count,yahoo,y_count,sell_text,s_count,update_time,))



		cur.close()
		conn.commit()
		conn.close()

		return render_template("index2.html",lst=lst,selectbox_name=selectbox_name,selectbox_value=selectbox_value,selectbox_length=selectbox_length,update=update)

if __name__ == '__main__':
	app.run(debug=True)