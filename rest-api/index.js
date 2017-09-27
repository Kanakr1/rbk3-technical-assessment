var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var morgan = require('morgan');

var app = express();
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));
// YOUR CODE BELOW

// app.get('/api/users', function(req, res) {
//   res.send(Users.getAll());
// });

app.get('/api/users', function(req, res) {
  res.send(Users.getAll());
});

app.post('/api/users', function(req, res) {
  Users.addOne(req.body);
  res.status(201).end();
});

app.get('/api/users/*', function(req, res) {
  var id = req.url.split(':')[1];
  id = parseInt(id);
  res.status(200).end(Users.getOne(id));
});

app.put('/api/users/*', function(req, res) {
  var id = req.url.split(':')[1];
  id = parseInt(id);
  Users.updateOne(id, req.body);
  res.status(200).end();

});

app.delete('/api/users/*', function(req, res) {
  var id = req.url.split(':')[1];
  id = parseInt(id);
  Users.deleteOne(id);
  res.status(200).end();
});
// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

