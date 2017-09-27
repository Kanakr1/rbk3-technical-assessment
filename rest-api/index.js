var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.use(function (req, res) {
  res.setHeader('Content-Type','text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

