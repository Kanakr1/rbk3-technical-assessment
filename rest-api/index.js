var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

app.get('/api/users', function(req, res){
  res.send(Users.getAll());
});

// the user is an object
// it is inside req.body
// i will use helper function addOne to add it to the array
// then i will send the added user to the client
// the req i get is json i should parse before pushing 
app.post('/api/users', function(req, res){
	newUser = JSON.parse(req.body);
	Users.addOne(newUser);
	res.send(JSON.stringify(newUser));
});
 

 // first i need to extract the user id from the req
 // then i will send this id to getOne
app.get('/api/users/:id', function(req, res){	
	id = req.params.id;
	res.send(Users.getOne(id));
});

// for put we need to update 
// params is used to fetch is from url
app.put('/api/users/:id', function(req, res){
	id = req.params.id;
 	parameters = JSON.parse(req.body);
 	res.send(Users.updateOne(id,parameters))
});
// before i delete i will find the user and store it
// i will use getOne helper function
app.delete('/api/users/:id', function(req, res){
	id = req.params.id;
	user = Users.getOne(id)
	Users.deleteOne(id)
	res.send(JSON.stringify(users))
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

