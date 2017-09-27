var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var request=require('request')
var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

app.get('/api/users ',function(req,res){
	function(err,data){
		if(!err){
			data.statuscode=200
			req.send(getAll());
		}
	}
})

app.post('/api/users',function(req,res){
	$.ajax({
	  url:'/api/users',
	  type: 'GET',
	  dataType: 'application/json',
	  dataType:'json'
	  headers:{jsone.stringify({id:users.id, name:users.name, email:users.email})}
    }) 
})

app.get('/api/users/:id ',function(req,res){
	//get a user by id using getOne function
	//and make the statecode=200

})

app.put('/api/users/:id ',function(req,res){
	//update or edit on user by id
	//send requst to edit the user using json
	//and make the statecode=201
	return updateOne()

})

app.delete('/api/users/:id',function(req,res){
	//i have to delete user by id using the function deleteOne
	// send the user
	$.ajax({
	  url:'/api/users',
	  type: 'DELETE',
	  dataType: 'application/json',
	  dataType:'json'
	  headers:{jsone.stringify({deleteOne()})}
    }) 
	if(!err){
		return deleteOne();
	}
})

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

