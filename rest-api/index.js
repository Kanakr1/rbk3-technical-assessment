var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var app = express();
app.use(bodyParser.json());

var http = require('http');
var path = require('path');
var fs = require('fs')
// YOUR CODE BELOW
var server = http.createServer(function(request,response){
	fs.readFile('Users',path ,function(err,data,statusCode){
		if(method === 'GET'){
			response.send(data,200)
			response.end()
		}
		if(method === 'POST'){
			response.send(data,201)
			response.end()
		}
		if(method === 'OPTION'){
			response.send(err,null)
			response.end()
		}
	})
	
});



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

