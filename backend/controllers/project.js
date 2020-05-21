'use strict'

var Project=require('../models/project');
var fs=require('fs');
var path=require('path');

var controller={
    home: function(req,res){
        return res.status(200).send({
            message: "Soy la Home"
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: "Soy el metodo test del controlador del project"
        });
    },
    
    saveProject: function(req,res){
        var project = new Project();

        var params=req.body;
        project.name=params.name;
        project.description=params.description;
        project.year=params.year;
        project.link=params.link;
        project.langs=params.langs;
        project.image=null;

        project.save((err,projectStored) =>{
            if(err) return res.status(500).send({message: "Error in saving project"});
            if(!projectStored) return res.status(404).send({message: "Unable to save project"});

            return res.status(200).send({project: projectStored});
        });
    },

    getProject : function(req,res){
        var projectId=req.params.id;

        if(projectId == null) return res.status(404).send({message: "A project ID must be provided"});

        Project.findById(projectId,(err,project) =>{
            if(err) return res.status(500).send({message: "Project ID: '"+projectId+"' does not exist"});
            if(!project) return res.status(404).send({message: "The project does not exist"});

            return res.status(200).send({project});
        });
    },

    listProjects: function(req,res){
        Project.find({}).sort().exec((err,projects) =>{
            if(err) return res.status(500).send({message: "Error returning projects"});
            if(!projects) return res.status(404).send({message: "No projects to return"});
            return res.status(200).send({projects});
        });
    },

    updateProject: function(req,res){
        var projectId=req.params.id;
        var update=req.body;

        Project.findByIdAndUpdate(projectId, update, (err,projectUpdated) =>{
            if(err) return res.status(500).send({message: "Error updating project"});
            if(!projectUpdated) return res.status(404).send({message: "Project does not exist"});
            return res.status(200).send({project: projectUpdated});
        });
    },

    deleteProject: function(req,res){
        var projectId=req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemoved) =>{
            if(err) return res.status(500).send({message: "Failed to delete project"});
            if(!projectRemoved) return res.status(404).send({message: "Unable to delete project"});
            
            return res.status(200).send({project: projectRemoved});
        });
    },

    uploadImg: function(req,res){
        var projectId=req.params.id;
        var fileName='Imagen no subida..';

        if(req.files){
            var filePath=req.files.image.path;
            var fileSplit=filePath.split('\\');
            var fileName=fileSplit[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];

            if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){

                Project.findByIdAndUpdate(projectId, {image: fileName},{new: true}, (err,projectUpdated) =>{
                    if(err) return res.status(500).send({message: "Image was not uploaded"});
                    if(!projectUpdated) return res.status(404).send({message: "Project does not exist"});

                    return res.status(200).send({project: projectUpdated});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message: "The extension is not valid"});
                });
            }
        }else{
            return res.status(500).send({message: fileName});
        }
    },

    getImageFile: function(req,res){
        var file=req.params.image;
        var path_file='./uploads/'+file;
        
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message: "No existe la imagen.."
                });
            }
        });
    }


};

module.exports=controller;