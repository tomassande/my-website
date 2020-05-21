'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var FileSchema=Schema({
    filename: String,
    cv: String
})

module.exports=mongoose.model('File',FileSchema);