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
app.post('/api/users', function(req, res){
	res.send(req)
	// newUser = {
	// 	id : req.body.id,
	// 	name : req.body.name,
	// 	email : req.body.email
	// }
	// Users.addOne(newUser)
 //  res.send(newUser);
});

// app.get('/', function(req, res){
//   res.send('hello world');
// });


// app.put('/', function(req, res){
//   res.send('hello world');
// });

// app.delete('/', function(req, res){
//   res.send('hello world');
// });

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

