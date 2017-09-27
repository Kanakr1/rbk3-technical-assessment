var mongoose=require('mongoose');
var express= require('express');
var app=express();
var port= 3000;
var http=require('http');
var bodyParser=require('body-parser');

// var server=http.createServer(function (req, res) {
	
// })

var uri='mongodb://localhost/jobquery';
mongoose.connect(uri);
var db=mongoose.connection;
app.use(express.bodyParser());


//I have one route which is for the users

// get request to the server to fetch all users
app.get('/api/users', function(req, res){
	findAll()
	.then(function(error, users){
		if(error){
			throw error;
		}
		else{
			res.json(users);

		}
	});
});




//make a post request from the client to the server to make a new user
app.post('/api/users', function(req, res){

});

//make a get request from the client using id to the server to return back a specific user
app.get('/api/users/:id', function(req, res){

});

app.listen(port);
console.log("Listening ...")