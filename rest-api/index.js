var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.GET('/api/users',function(req,res){
	var allusers= getAll();
	res.send(JSON(allusers));
})

// var id = db.find({}}).where({id:req})
app.GET('/api/users/:'+id,function(req,res){
	var user = getOne(id)
	res.send(JSON.parse(user))
})

app.POST('/api/users',function(req,res){
	var x=JSON.stringify(req.body)
	addOne(x);
	res.send(JSON.parse(req.body));
})

app.PUT('/api/users/:'+id,function(req,res){
	res.send(JSON.parse(updateOne(id,req.body)))
});

app.DELETE('/api/users/:'+id,function(req,res){
	var a=deleteOne(id)
	res.send(JSON.parse(a))
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

