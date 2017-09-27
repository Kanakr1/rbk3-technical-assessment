var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

var options=[{methode:['GET','POST','PUT','DELETE'] },
	{contentType:'text/html'}]
	

app.get ('/api/users',function(request, response){
// Users.getAll()	
	response.send (Users.getAll())

})
app.post('/api/users',function(request, response){
	response.send (Users.addOne())
})
app.get('/api/users/:id',function(request, response){
	response.send (Users.getOne())
})
app.put('/api/users/:id',function(request, response){
		response.send (Users.updateOne())

})
app.delete('/api/users/:id',function(request, response){
		response.send (Users.deleteOne())

})
// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
	console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

