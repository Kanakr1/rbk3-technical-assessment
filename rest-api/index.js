var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var morgan = require('morgan');

var app = express();
app.use(bodyParser.json());
app.use(morgan);
// YOUR CODE BELOW
app.get('/api/users',function(req,res){
	var data = Users.getAll();
	res.send(JSON.stringify(data));
});

app.post('/api/users',function(req, res){
	Users.addOne(JSON.parse(req.body));
	res.send(req.body);
});
app.getElementsByTagName('')et('/api/users/:id',function(req, res){
	var data = Users.getOne(id);
	res.send(JSON.stringify(data));
});

app.put('/api/users/:id',function(req,res){
	var data = Users.updateOne(id,JSON.parse(req.body));
	res.send(JSON.stringify(data));
});

app.delete('/api/users/:id',function(req, res){
	Users.deletOne(id);
	res.send(req.body)
});


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

