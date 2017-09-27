// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};


var mongoose=require('mongoose');

var schema= new mongoose.Schema({
	name:String,
	email:String
});

var User = mongoose.model('User', schema);

module.exports=User;