var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

app.get('/api/users', function(req, res) {
    res.json(Users.getAll())

});

app.post('/api/users', function(req, res) {

	var newuser = req.body
	res.json(Users.addOne(newuser))
  
});

app.get('/user/id', function(req, res) {
	res.json(Users.getOne(id))
  
});

app.post('/id', function(req, res) {
	 var neweamail= req.body 
	 //var id = ObjectId(req.body.params[0])
	 res.json(Users.updateOne(id,neweamail))
  
});

app.post('/id', function(req, res) {
	var id = ObjectId(req.body.params[0])
	res.json(Users.deleteOne(id))
	
  
});


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

