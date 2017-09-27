var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var morgan = require('morgan');
var app = express();
var
app.use(bodyParser.json());
app.use(morgan('dev'));


// YOUR CODE BELOW

//i actually realized that i need to focus more on understanding the callbacks and the middleware and how the are used with express requests.

app.get('/api/users',getAll , function(req, res){

	res.send(getAll());
})


app.post('/api/users',addOne , function(req, res){ // where are passing the helper functions here as middleware. but invoking them inside the request is what i struggle with.
		                                      
})


app.get('/api/users/:id',getOne , function(req, res){

})


app.put('/api/users/:id',updateOne , function(req, res){

})


app.delete('/api/users/:id',deleteOne , function(req, res){
	
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

