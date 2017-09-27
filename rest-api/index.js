var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

//Return JSON of all users 
app.get('/api/users', function(req, res){
 Users.getAll()
	.then(function(error, users){
		if(error){
			throw error;
		}
		else{
			res.json(users);

		}
	});
});

//Create new user* and return JSON of new user
app.post('/api/users', function(req, res){
  Users.addOne()
  .then(function(error, user){
		if(error){
			throw error;
		}
		else{
			res.json(user + " " + "added");

		}
	});
});

//Return JSON of single user with matching `id`
app.get('/api/users/:id', function(req, res){
	Users.getOne()
	.then(id, function(error, user){
		if(error){
			throw error;
		}
		else{
			res.json("User:" + " " +user)
		}
	});
});



// Update user** with matching `id` and return JSON of user
app.put('/api/users/:id', function(req, res){
	Users.updateOne()
	.then(id, function(error, user){
		if(error){
			throw error;
		}
		else{
			res.json(user + " " + "updated")
		}
	});
});

 // Delete user with matching `id` and return JSON of user
app.delete('/api/users/:id', function(req, res){
	Users.deleteOne()
	.then(id, function(error, user){
		if(error){
			throw error;
		}
		else{
			res.json(user + " " + "deleted")
		}
	});
});


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

