var express = require('express');
var app = express();
var request = require('request');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/api/users', function(req, res) {
	 var options = {
	 	url:"localhost:3000/api/users"+ req.body.name,
	 	'agent-user': 'request'
	 }
	 request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(req.body.name); 
  }
});

  
});

// here i will creat request method to the api 
// to get its data 

app.get('/id', function(req, res) {
  res.send('Hello World!');
});



app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});


request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
});