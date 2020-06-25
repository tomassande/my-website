'use strict'

var express=require('express');
var bodyParser=require('body-parser');

var app=express();

//Cargar Archivos de Rutas

var project_routes=require('../backend/routes/project');
var files_routes=require('../backend/routes/files');


//Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Cualquier tipo de peticion la convierte a JSON

//CORS

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS

app.use('/api',project_routes);
app.use('/api',files_routes);

//CONEXION ATLAS


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbadmin:1q2w3e4r!@cluster0-azwgc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("my-website-portfolio");
  // perform actions on the collection object
  client.close();
});


//export

module.exports=app;