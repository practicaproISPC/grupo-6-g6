from logging import debug
from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/layout")
def layout():
    return render_template('layout.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/contactanos')
def contactanos():
    return render_template('contactanos.html')

@app.route('/cargarUsuarios')
def cargarUsuarios():
    return render_template('cargarUsuarios.html')

@app.route('/test')
def test():
    return render_template('test.html')
    
if __name__ == '__main__':
    app.run(debug=True)