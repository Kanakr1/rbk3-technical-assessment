var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var path =require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)))
//console.log(path.join(__dirname));
// YOUR CODE BELOW
app.get('/api/users', function (req, res) {
  res.status(200).send(JSON.stringify(Users.getAll()));
});

app.post('/api/users', function (req, res) {
	user={
		id:0,
		name:req.body.name,
		email:req.body.mail
	}
	Users.addOne(user);
  res.status(201).send(JSON.stringify(user));
  //console.log(user)
})

app.get('/api/users/:id', function (req, res) {
	id=req.query;
	id=id.id;
	user=Users.getOne(id);
	//console.log(user);
  res.status(200).send(JSON.stringify(user));
});

app.put('/api/users/:id', function (req, res) {
	id=req.body.id;
	user=Users.getOne(id);
    res.send(JSON.stringify(user));
});
app.delete('/api/users/:id', function (req, res) {
	id=req.body.id;
	user=Users.getOne(id);
    res.send("user deleted");
});

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

