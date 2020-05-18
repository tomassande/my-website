'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=3705;

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/my-website-portfolio')
            .then(() =>{
                console.log("Conexion a la BBDD establecida exitosamente");
                //Creacion del servidor
                app.listen(port,() =>{
                    console.log("Servidor ejecutando correctamente en la url: localhost:3705");
                });
            })
            .catch(err => console.log(err));