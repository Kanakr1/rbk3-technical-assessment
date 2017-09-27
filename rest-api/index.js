var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
// return All Users if there is get request
app.get ('/api/users', (req, res) => {
  res.send(Users.getAll());
  res.end ();
});

// Add new user on POST request at /api/users
app.post ('/api/users', (req, res) => {

  res.send (201, Users.addOne (req.body) );
  res.end ();
});

// Return a user that match the given id.
app.get ('/api/users/:id', (req, res) => {
  res.send ( Users.getOne (req.url.split(':')[1]));
  res.end ();
});

app.put ('/api/users/:id', (req, res) => {
  res.send (200, Users.updateOne (req.url.split(':')[1], req.body));
  res.end ();
});

app.delete ('/api/users/:id', (req, res) => {
  res.send ( Users.deleteOne (req.url.split(':')[1], req.body));
});

// Do not touch this invocation of the `listen` method
app.listen('8886', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;
