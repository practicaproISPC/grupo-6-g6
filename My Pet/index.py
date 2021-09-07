from logging import debug
from flask import Flask, render_template, redirect, url_for, request
from datos.db import conexion




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


def ingresarDatos():
    try:
        with conexion.cursor() as cursor:
            # En este caso no necesitamos limpiar ningún dato
            cursor.execute("INSERT INTO Test VALUES ('Pedro');")

            # Con fetchall traemos todas las filas
            #alumnos = cursor.fetchall()
            #print(alumnos)
            # Recorrer e imprimir                        
    except Exception as e:
         print("Ocurrió un error al consultar: ", e)
    finally:
        conexion.close()


app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/layout")
def layout():
    return render_template('layout.html')

@app.route('/login')
def login():
    #ingresarDatos()
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

@app.route('/store', methods=['POST'])
def storage():
    email=request.form['txtEmail']
    clave=request.form['txtPass']


    if obtenerUsuario(email,clave):
        print(email)
        print("HOLA DATOS CORRECTOSSS")
        return render_template('layout.html')
    else:    
        return render_template('login.html')



if __name__ == '__main__':
    app.run(debug=True)


