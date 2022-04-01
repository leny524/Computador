//Importar todas las librerias necesarias.
const express= require("express");
const cors = require("cors");
const morgan= require("morgan");
const low = require("lowdb");
const articulosRouter =require("./routes/articulos");

//Determinar el puerto del EndPoint
const PORT = process.env.PORT || 10801;

//Obtenemos la libreria controlador del Archivo
const FileSync = require("lowdb/adapters/FileSync");

//Creamos el archivo db.json
const adapter = new FileSync("db.json");
const db= low(adapter);

//Iniciamos la BD
db.defaults({articulos:[]}).write();
console.log('Inicializamos la BD');
const app =express(); //Creamos el aplicativo

app.db =db; //Definimos el DB

//Definimos las variables necesarias.
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Mostramos el log de ejecucion del servidor
app.listen(PORT, () => console.log('El servidor esta corriendo en el puerto ${PORT}'));

