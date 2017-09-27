// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose=require("mongoose");
var mongoDB='172.0.0.1/user';
var userSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String
	}
});

var User=mongoose.model('users',userSchema);

var db=mongoose.connection;

var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

module.exports=User;


