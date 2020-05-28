from flask import Flask, render_template,request
import pandas as pd
from datetime import datetime, date, timedelta
import mysql.connector
#おまじない
app=Flask(__name__)
@app.route("/")
def login():
	return render_template("index.html")


@app.route("/post",methods=["GET","POST"])
def log():
	if request.method=="POST":
		user_id=request.form.get("userid")
		print(user_id)
		ranking=[[1,],[2,]]
	return render_template("index2.html",ranking=ranking)

if __name__ == '__main__':
	app.run(debug=True)