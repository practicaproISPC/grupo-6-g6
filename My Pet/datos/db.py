import pyodbc

direccion_servidor = 'dbmypet.cdielgixw4nb.us-east-2.rds.amazonaws.com,1433'
nombre_bd = 'MyPetDB'
nombre_usuario = 'admin'
password = 'admin2021'
try:
    conexion = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' + 
                            direccion_servidor+';DATABASE='+nombre_bd+';UID='+nombre_usuario+';PWD=' + password)
    print("\n"*2)
    print("conexión exitosa")
    
except Exception as e:
    print("Ocurrió un error al conectar a SQL Server: ", e)
