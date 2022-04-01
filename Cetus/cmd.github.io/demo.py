import pymongo
import os
import certifi
ca = certifi.where()

client = pymongo.MongoClient("mongodb+srv://ebarrientos:40300679@cluster0.fxdmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", tlsCAFile=ca  )
objetoAlumno={}
db = client.test
coll= db.alumno
for documento in coll.find({}):
    print(documento)

os.system('cls')
print('Datos del Alumno')
nombre=input('Ingrese su nombre; ')
apellidos=input('Ingrese los apellidos: ')
cursos=input('Ingrese los cursos separados por (,): ')

misCursos=[]
for curso in cursos.split(','):
    misCursos.append(curso)

objetoAlumno['nombre'] = nombre
objetoAlumno['apellidos'] = apellidos
objetoAlumno['cursos'] = misCursos

print('Gurdando la informacion...')

dato = coll.insert_one(objetoAlumno)
print('ID insertado: ', dato.inserted_id)

os.system('cls')

print('Mostrando todos los documentos de nuesta colleccion')
for documento in coll.find({}):
    print(documento)

# coll.insert_many([
#     {'nombre':'Manuel Ignacio',
#      'apellidos':'Figueroa Lopez',
#      'cursos':['Lenguaje de Programacion','Ingles Tecnico']},
#      {'nombre':'Jose Lautaro',
#       'apellidos':'Perez Perez',
#       'cursos':['Lenguaje de Programacion','Ingles Tecnico']}
# ])



