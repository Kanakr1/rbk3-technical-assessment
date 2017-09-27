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
  res.end();
})


app.get('/api/users/:id',function (req,res) {
  for(var i=0;i<users.length;i++){
    if(users[i].id==req.url.substring(req.url.lastIndexOf('/')+1)){
      res.send(JSON.stringify(users[i]));
    }
  }
  res.end();
})



app.delete('/api/users/:id',function (req,res) {
Users.deleteOne(req.url.substring(req.url.lastIndexOf('/')+1));
res.send(Users.getAll());
})


// Do not touch this invocation of the `listen` method
app.listen('1313', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;
