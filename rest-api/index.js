var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

app.get('/models/users', function(req, res){
  res.json('users');

app.post('/models/users', function(req, res){
  res.json('addOne');

app.get('/models/users/:id', function(req, res){
  res.json('getOne');

app.put('/models/users:id', function(req, res){
  res.json('updateOne');

app.delete('/models/users/:id', function(req, res){
  res.json('deleteOne');


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

