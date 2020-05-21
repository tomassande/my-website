'use strict'

var File=require('../models/files');
var fs=require('fs');
var path=require('path');

var files_controller={

    saveFile: function(req,res){
        var file = new File();
        var params=req.body;
        file.filename=params.filename;
        file.cv=null;
        console.log(params);
        file.save((err,fileStored) =>{
            if(err) return res.status(500).send({message: "Error saving file"});
            if(!fileStored) return res.status(404).send({message: "Unable to save file"});

            return res.status(200).send({project: fileStored});
        });
        makeFileRequest(req.file);
    },

    uploadFile: function(req,res){
            var filesId='5ec6cd333c925d3bc01f8387';
            var fileName='Imagen no subida';
            if(req.files){
                var filePath=req.files.cv.path;
                var fileSplit=filePath.split('\\');
                var fileName=fileSplit[1];
                var extSplit=fileName.split('\.');
                var fileExt=extSplit[1];
                    //lo importamos en la BBDD//
                    File.findByIdAndUpdate(filesId,{cv: fileName},{new:true},(err,filesUpdated)=>{
                        if(err) return res.status(500).send({message: 'The file was not uploaded'});
                        if(!filesUpdated) return res.status(404).send({message: 'Files folder does not exist in Database'});
                        return res.status(200).send({
                        files: filesUpdated
                        });
                    });
            }else{
                return res.status(500).send({
                    message: fileName
                })
            }
    },

    getFile: function(req,res){
        var file=fs.open('./uploads/CV-Tomas-Sande_EN.pdf');
        
        /*var query= {filename: 'CV-Tomas-Sande_EN.pdf'};
        File("files").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        })*/
        return file;
    },

    makeFileRequest(files){

        return new Promise(function(resolve,reject){
            var formData=new FormData();  /*necesitamos simular un formulario clasico para guardar los ficheros*/
            var xhr=new XMLHttpRequest();     /*xhr es un sinonimo de AJAX*/
            
            for(var i=0;i<files.length;i++){
                formData.append(name,files[i]); /*recorremos el array de ficheros que vayan llegando y los guardamos en formData*/
            }
            console.log(formData);
            xhr.onreadystatechange=function(){      /*cuando hay algun cambio..*/
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST',url,true);
            xhr.send(formData);
        });
    }



};

module.exports=files_controller;