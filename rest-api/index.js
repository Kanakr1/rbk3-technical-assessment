var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser());

// YOUR CODE BELOW
app.get('/api/users',function(req ,res){
	Users.find({},function(err ,user){
		res.send(users);
	})
} );

app.get('/api/users/:id',function(req, res){
	User.find({'user':req.params.id}, function(err, user){
		res.send(user);
	})
});
app.post('/api/users', ,function(req, res){
	var id = req.body.id;
	var name = req.body.name;
	var email = req.body.email;

    res.console.log(req.body.id , req.body.name , req.body.email);

	res.send(req.body.id , req.body.name , req.body.email);

});
app.delete('/api/users/:id',function(req, res){
  User.find({'user':req.params.id}, function(err, user){
		res.send(user);
	})
	
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

