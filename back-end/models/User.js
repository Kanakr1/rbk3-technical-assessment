// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose  =require('mongoose');
var Schema = mongoose.Schema;



mongoose.connect('mongodb://localhost/alaa');

var db = mongoose.connection;
db.on('error', console.error.bind(console , 'connection error'));
db.on('open',function() {
	console.log(' db is connecting')
})	

var exampleUser = new Schema({
  name: String,
  email: String
});

var User = mongoose.model('User', exampleUser);

module.exports =User;

