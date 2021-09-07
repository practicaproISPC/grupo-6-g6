from logging import debug
from flask import Flask, render_template, redirect, url_for, request
from datos.db import conexion
from http import cookies
from datetime import datetime


cookie = cookies.SimpleCookie()
cookie["inicioSecion"] = 'False'
cookie["consultaEnviada"] = 'False'

def obtenerUsuario(mail,clave):
    try:
        with conexion.cursor() as cursor:
            # En este caso no necesitamos limpiar ningún dato
            cursor.execute("SELECT * FROM Usuarios WHERE Mail =? and Clave=?",mail, clave)

            # Con fetchall traemos todas las filas
            usuario = cursor.fetchall()
            #Si encontro Usuario devuelvo True
            if usuario:
                return True
            else:
                return False
            # Recorrer e imprimir                        
    except Exception as e:
         print("Ocurrió un error al consultar: ", e)


def guardarConsulta(nombre,email, mensaje):
    try:
        with conexion.cursor() as cursor:
            fecha = datetime.now()
            # En este caso no necesitamos limpiar ningún dato
            cursor.execute("INSERT INTO Consultas (nombre, email, mensaje, fecha) VALUES(?,?,?,?)",nombre, email,mensaje, fecha)
            cookie["consultaEnviada"] = 'True'
            # Con fetchall traemos todas las filas
            #alumnos = cursor.fetchall()
            #print(alumnos)
            # Recorrer e imprimir                        
    except Exception as e:
         print("Ocurrió un error al consultar: ", e)

        


app = Flask(__name__)

@app.route("/")
def home():
    valor = (cookie["inicioSecion"].value)
    return render_template('home.html', inicioSesion= valor)

@app.route("/layout")
def layout():
    valor = (cookie["inicioSecion"].value)
    if valor=="True":
        return render_template('layout.html', inicioSesion= valor)
    else:
        return render_template('login.html')


@app.route('/login')
def login():
    #ingresarDatos()
    valor = (cookie["inicioSecion"].value)
    if valor=="True":
        return render_template('layout.html')
    else:
        return render_template('login.html')

@app.route('/logout')
def logout():
    #Cabio el valor de la coockie a false
    cookie["inicioSecion"] = 'False'
    valor = (cookie["inicioSecion"].value)
    return render_template('home.html', inicioSesion= valor)
    

@app.route('/contactanos')
def contactanos():
    valor = (cookie["inicioSecion"].value)
    envio = cookie["consultaEnviada"].value
    cookie["consultaEnviada"]="False"

    print("VALOR CONTACT COOKIES: " + valor)
    return render_template('contactanos.html', inicioSesion= valor, consultaEnviada= envio)

@app.route('/cargarUsuarios')
def cargarUsuarios():
    valor = (cookie["inicioSecion"].value)
    if valor=="True":
        return render_template('cargarUsuarios.html', inicioSesion= valor)
    else:
        return render_template('login.html')

    

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/store', methods=['POST'])
def storage():
    email=request.form['txtEmail']
    clave=request.form['txtPass']
    if obtenerUsuario(email,clave):
        #print(email)
        #print("HOLA DATOS CORRECTOSSS")
        cookie["inicioSecion"] = 'True'
        valor = (cookie["inicioSecion"].value)
        #print("COOKIE " + valor)
        return render_template('layout.html', inicioSesion= valor)
    else:   
        return render_template('login.html',errorUsuario=True)

@app.route('/cotactoConsulta', methods=['POST'])
def mensaje():
    cookie["consultaEnviada"] = 'False'
    email=request.form['txtEmail']
    nombre=request.form['txtNombre']
    mensaje=request.form['txtMensaje']
    print(email, nombre, mensaje)

    guardarConsulta(nombre,email,mensaje)

    #print("COOKIE " + valor)
    #return render_template('contactanos', inicioSesion= valor)
    return redirect("/contactanos")



if __name__ == '__main__':
    app.run(debug=True)


