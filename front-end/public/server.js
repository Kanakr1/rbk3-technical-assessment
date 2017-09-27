var express=require('express');
var app=express;
var path=require('path');
var bodyparser=require("pody-parser");
var User=require('../back-end/controllers/userController');
var mongoose=require('mongoose');
var Job=require('../back-end/controllers/jobController');
var mongod=mongoose.connect;
app.use(express.static(path.join(__dirname+'public')));

app.get('/api/users',function(req,res){
	res.send(bodyparser.json(User.readAllUsers(function(data){
		data=db.findAll(db.name)
	})))
});

app.get('/api/users/id',function(req,res){
	res.send(bodyparser.json(User.getUserByName(req.bod.id,function(data){
		var id=req.bod.id
	})))
});