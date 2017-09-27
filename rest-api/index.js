var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

//api/users  | GET  |   Return JSON of all users
app.get('/api/users', function (req , res) {
  console.log('get "api/users"');
  res.send(Users.getAll());
})

//api/users  |  POST | Create new user* and return JSON of new user 
app.post('/api/users', function (req , res) {
  console.log('post "api/users"');
  console.log('added use : ' , Users.addOne(req.body));
  res.status(201).send('created');
})


//api/users/:id | GET | Return JSON of single user with matching `id` 
app.get('/api/users/*', function (req , res) {
  var id = parseInt(req.url.slice(req.url.lastIndexOf('/')));
  console.log('get "api/users/:id"', id);
  var found =  Users.getOne(id);
  res.send(found);
})


//api/users/:id | PUT |  Update user** with matching `id` and return JSON of user
app.put('/api/users/*', function (req , res) {
  var id = parseInt(req.url.slice(req.url.lastIndexOf('/')));
  console.log('PUT "api/users/:id"' , id);
  console.log(id , req.body)
  res.send(Users.updateOne(id, req.body));
})


//api/users/:id | DELETE |  Delete user with matching `id` and return JSON of user
app.delete('/api/users/*', function (req , res) {
  console.log('DELETE "api/users/:id"');
  var id = parseInt(req.url.slice(req.url.lastIndexOf('/')));
  res.send(Users.deleteOne(id));
  console.log('done')
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

