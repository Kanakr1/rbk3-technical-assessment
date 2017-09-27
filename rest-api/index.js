var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


// YOUR CODE BELOW

app.get('/api/users', function(req,res){
	console.log(Users.getAll())
	res.send(JSON.stringify(Users.getAll()))
})

app.post('/api/users', function(req,res){
	Users.addOne(req.body)
	res.send(JSON.stringify(req.body), 201)
})

app.get('/api/users/:id', function(req,res){
	id = Number(req._parsedUrl.pathname[req._parsedUrl.pathname.length-1])
	var x = Users.getOne(id)
	res.send(JSON.stringify(x))
})

app.put('/api/users/:id', function(req,res){
	id = Number(req._parsedUrl.pathname[req._parsedUrl.pathname.length-1])
	var x = Users.updateOne(id, req.body)
	res.send(JSON.stringify(x))
});

app.delete('/api/users/:id', function(req,res){
	id = Number(req._parsedUrl.pathname[req._parsedUrl.pathname.length-1])
	var x = Users.deleteOne(id)
	console.log(x)
	res.send(JSON.stringify(x))
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

