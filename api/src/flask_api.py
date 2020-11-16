from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/hoge',methods = ['POST'])
def hoge_get_data():
    return request.get_data()

@app.route('/login',methods = ['GET','POST'])
def login():
    return 'log in'

if __name__ == "__main__":
    app.run(debug = True,host='0.0.0.0',port=5000)