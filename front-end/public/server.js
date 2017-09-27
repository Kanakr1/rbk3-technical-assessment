var express=require('express');
var app=express;
var path=require('path');
var bodyparser=require("pody-parser");
var User=require('../back-end/controllers/userController');
var mongoose=require('mongoose');
var Job=require('../back-end/controllers/jobController');
var mongod=mongoose.connect;
var db=require("../models/User");

var port=process.env.Port||3000;
app.use(express.static(path.join(__dirname+'public')));


app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'index.html'))
})
app.get('/api/users',function(req,res){
	res.send(bodyparser.json(User.readAllUsers(function(data){
		data=db.findAll(db.name)
	})))
});

app.get('/api/users/id',function(req,res){
	res.send(bodyparser.json(User.getUserByName(req.body.id,function(data){
		var Id=req.body.id;
		if(Id===User.db.id){
			return data;
		}
		res.send('Id is not in the database');

	})))
});

// app.post()


app.listen(port);

console.log('listning on port: ',port)