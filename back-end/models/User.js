// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/Myapp');
mongoose.connect('mongodb://username:password@host:port/database?options...');

var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

var userschema=new Schema({name: 'string',email: 'string'});

var User= mongoose.model('User',userschema);
var perantschema= new User(exampleUser);

// var User=new User (exampleUser)

module.exports=mongoose;