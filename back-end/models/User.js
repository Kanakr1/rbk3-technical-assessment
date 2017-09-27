// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};
// mongoose.connect('mongodb://localhost/m')
var mongoose=require('mongoose');
var schema=mongoose.Schema;

var UserSchema=new schema({
	name:String,
	email:String

})
var User=mongoose.Model('User',UserSchema)
Module.export=User;