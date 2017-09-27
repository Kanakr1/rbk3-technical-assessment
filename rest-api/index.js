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
  Users.setAll(req.body);
  res.send(Users.getAll());
})


//api/users/:id | GET | Return JSON of single user with matching `id` 
app.get('/api/users/:id', function (req , res) {
  console.log('get "api/users/:id"');
  res.send(getOne(req.body));
})


//api/users/:id | PUT |  Update user** with matching `id` and return JSON of user
app.put('/api/users/:id', function (req , res) {
  console.log('PUT "api/users/:id"');
  var changing ;

})


//api/users/:id | DELETE |  Delete user with matching `id` and return JSON of user
app.delete('/api/users/:id', function (req , res) {
	console.log('DELETE "api/users/:id"')
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

