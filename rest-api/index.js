var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.get('/api/users' , function(req,res){

	res.send({users});
});

app.post('/api/users' , function(req,res){
	var newUser = addOne(newUser);

	res.send({newUser});
});

app.get('/api/users/:id' , function(req,res){
	var thisUser = getOne(id);
	res.send({thisUser})
});


app.put('/api/users/:id' , function(req,res){
	.
});


app.delete('/api/users/:id' , function(req,res){
	.
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

