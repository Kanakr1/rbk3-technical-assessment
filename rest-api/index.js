var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

app.get('/', function(req,res){
	
	res.send(JSON.stringify(Users.getAll()));
	// res.json(Users.getAll())
});

app.get('/users', function(req,res){
	//should send back all users 
	res.send(JSON.stringify(Users.getAll()));
});

app.post('/users',function(req,res){
	// push the new user in the db 
	//and return to the user the hole users including the newest one
	res.send(JSON.stringify(Users.addOne(req.body)))

});

app.get('/users/:id', function(req,res){
	
	res.send(JSON.stringify(Users.getOne(req.url)))
});

app.post('/users/:id',function(req,res){
	res.send(JSON.stringify(Users.updateOne(req.body)))
});

app.delete('/users/:id',function(req,res){
	res.send(JSON.stringify(Users.deleteOne(req.url)))
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

