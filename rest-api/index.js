var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var urlencode = bodyParser.urlencoded({ extended: true});
var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.get("/api/users", function(req,res){
	res.json(Users.getAll());
})


app.post("/api/users",function(req,res){
	user = req.body;
	Users.addOne(user);
	res.send(201)
})

app.get("/api/users/:id", function(req,res){
	res.json(Users.getOne(req.id));
})

app.put("/api/users/:id", function(req,res){
	user = req.body;
	update = Users.updateOne(user.id,user);
	res.json(update);
})

app.delete("/api/users/:id", function(req,res){
	Users.deleteOne(Users.getOne(req.id))
	res.send(200)
})








// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

