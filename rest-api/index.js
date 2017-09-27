var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var morgan=require('morgan');
var request=require('request');

var app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
// var pRequest=new request('http://localhost/api')
// YOUR CODE BELOW
// app.get('/api',function(req,res){
// 	res.status(200).send('test')
// })

app.get('/users',function(req,res){
	
	res.status(200).send(JSON.stringify(Users.getAll()));
})
app.post('/users',function(req,res){
	Users.addOne(req.body)
	res.status(201).send(JSON.stringify(req.body));
})

app.get('/users:id',function(req,res){
	console.log(req.body)
	res.status(200).send(JSON.stringify(Users.getOne(req.body.id)));

})

app.delete('/users:id',function(req,res){
	Users.deleteOne(req.body.id)
	res.status(200).send(req.body)

})

app.put('/users:id',function(req,res){
	res.status(200).send(JSON.stringify(Users.updateOne(req.body.id, /*the new property*/ )))
	
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

