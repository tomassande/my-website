'use strict'

var express=require('express');
var ProjectController=require('../controllers/project');

var router=express.Router();

var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir: './uploads'})

router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?',ProjectController.getProject);
router.get('/list-projects',ProjectController.listProjects);
router.put('/update-project/:id',ProjectController.updateProject);
router.delete('/delete-project/:id',ProjectController.deleteProject);
router.post('/upload-img/:id', multipartMiddleware, ProjectController.uploadImg);

module.exports=router;