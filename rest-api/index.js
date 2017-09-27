var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
//get users
app.get('/api/users', function(req, res){
	Users.getAll();
  res.send(200 , JSON.stringify(req.body));
});

//post new user
app.post('/api/users' , function (req ,res) {
	/* body... */
	// var obj = {
	// 	name : req.body.name,
	// 	email : req.body.email,

	// }
	var user = Users.addOne(user)
	// var obj ={name : req.body.user.name,
	// 		  email : req.body.user.emai
	// }
	res.send(201 , JSON.stringify(user))
})

// user with matching id
app.get('/api/users:id', function(req, res){
	// get id from url using req.params.id
	Users.getOne(req.params.id)
	res.send(200 , JSON.stringify(req.body))
});
 
// put new user 

app.put('/api/users/:id' , function (req , res) {
	/* body... */
	Users.updateOne(req.params.id, property)
	res.send(200 , JSON.stringify(req.body);
})


//delete user 
app.delete('/api/users/:id' , function (req , res) {
	/* body... */
	Users.deleteOne(req.params.id)
	res.send(200 , JSON.stringify(req.body));
})
// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

