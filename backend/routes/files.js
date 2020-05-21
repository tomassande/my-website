'use strict'

var express=require('express');
var FileController=require('../controllers/files.js');

var file_router=express.Router();

var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir: './uploads'})

file_router.post('/save-file', multipartMiddleware, FileController.saveFile);
file_router.post('/upload-file', multipartMiddleware, FileController.uploadFile);
file_router.get('/get-file',FileController.getFile);

module.exports=file_router;