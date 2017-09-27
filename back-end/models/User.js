// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/job');
var userSchema = new mongoose.schema({
	name :  String , 
	email : String 
})

var User =  mongoose.model('user' , userSchema);

module.exports = User;
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};


