var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

var users=Users.getAll();

app.get('/api/users',function (req,res) {
  res.send(JSON.stringify(users));
})
app.post('/api/users',function (req,res) {
  Users.addOne(req.body.user);
  res.send(JSON.stringify(users));

})

app.get('/api/users/:',function (req,res) {

})

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;
