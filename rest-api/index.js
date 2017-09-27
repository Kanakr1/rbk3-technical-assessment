var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW
app.post('/api/users', function (req, res) {
	res.sendStatus(201)
	var user = new user(req.body.data);

	user.save(function(err){
		if(err){
			console.log(err)
		}
		

	})
})


app.get('/api/users', function (req, res) {

    	res.sendStatus(200)
     

})


app.get('/api/users/:id', function (req, res) {
  res.sendStatus(200);

  Users.find({}, function (err, user) {
    if (err) return handleError(err);

      res.send(JSON.stringify({ data : user } ))
  })

})
app.delete('/api/users/:id', function (req, res) {
	  res.sendStatus(200);

	Users.remove({name : req.body.data} , function (err){
 	    if(err) console.log(err);
	   res.send('delete user from data base')
	})
})


app.put('/api/users/:id', function (req, res) {

  res.sendStatus(200);
})
// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
})

// Do not touch the exports object
module.exports = app;

