var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

app.get('/', function(req, res) {
  res.redirect('index');
});


app.post('/api/users', function(req, res) {
	 var options = {
	 	url:"localhost:3000/api/users"+ req.body.name,
	 	'agent-user': 'request'
	 }
	 request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(req.body.name); 
  }

  // from here I will recive the api
  // then I will save those information inside my database
  // cause I will recive them as array I can go through them in 
  //for loop and creat a schema then choose what I want to save in my data base
  // to see those information that i recieved from the api
  // I will parcse them 
  //  res.JSON.Parse(req.body)
  // to see them in my page
});
	 res.json(body)
});

// here i will creat request method to the api 
// to get its data 

app.get('/id', function(req, res) {
  //res.send('Hello World!');

 // I will used query related to Id.Object(req.body.params[])
 //to get spicific user 
 // that what I used in my project to get a spicific user with spicific Id 
});



app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});


// what am trying to do
// in my project I install those type of data like users information
// inside mlap as a data base , so I used mongojs
// so what I make I initialized ejs files for tasks and save those tasks inside collection 
// in the mlap 
//  and in server.js I require ejs and path join and body parser
// in tasks file through query of find all I receive the all tasks that stored in my 
//data base
//  














