var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var request = require('request');
var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
var data = require('./models/users.js')

app.get('/api/users', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})
app.post('/api/users', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})
app.get('/api/users/:id', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})
app.put(' /api/users/:id', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.delete(' /api/users/:id', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})






// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

