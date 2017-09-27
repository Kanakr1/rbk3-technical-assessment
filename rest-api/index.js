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
			res.send(200 + " " +"OK", json(users));
		}
	});
});

//Create new user* and return JSON of new user
app.post('/api/users', function(req, res){
  Users.addOne()
  .then(function(error, newUser){
		if(error){
			throw error;
		}
		else{
			// res.json(user + " " + "added");
			res.send(201 + " " +"OK", json(newUser));
		}
	});
});

//Return JSON of single user with matching `id`
app.get('/api/users/:id', function(req, res, id){
	Users.getOne()
	.then(function(error, user){
		if(error){
			throw error;
		}
		else{
			res.send(200 + " " +"OK", json(user));
		}
	});
});



// Update user** with matching `id` and return JSON of user
app.put('/api/users/:id', function(req, res, id, newProperties){
	Users.updateOne()
	.then(function(error, user){
		if(error){
			throw error;
		}
		else{
			res.send(200 + " " +"OK", json(user + " "+ "Updated"));
		}
	});
});

 // Delete user with matching `id` and return JSON of user
app.delete('/api/users/:id', function(req, res, id){
	Users.deleteOne()
	.then(function(error, user){
		if(error){
			throw error;
		}
		else{
			res.send(200 + " " +"OK", json(user + " "+ "deleteed"));
		}
	});
});


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

