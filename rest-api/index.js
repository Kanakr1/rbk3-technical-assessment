var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

var users=Users.getAll();

app.get('/api/users',function (req,res) {
    res.send(JSON.stringify(users));
})


app.get('/api/users/:id',function (req,res) {
  user=Users.getOne(req.url.substring(req.url.lastIndexOf('/')+1));
    res.send(JSON.stringify(user));
    res.end();
})


app.delete('/api/users/:id',function (req,res) {
  Users.deleteOne(req.url.substring(req.url.lastIndexOf('/')+1));
    res.send(Users.getAll());
    res.end();
})

app.put('/api/users/:id',function (req,res) {
  Users.addOne(req.url.substring(req.url.lastIndexOf('/')+1));
    res.send(Users.getAll());
    res.end();
})


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;
