// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var db= mongoose.connection;

 mongoose.connect('mongodb: //models/User.js')

var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};



var UserSchema= new Schema ({
     name:String,
     email :String
});


db.on('error',console.error.bind(console, 'connection error'));

db.once('open',function callback(){
	console.log('connect to database')
})

var UserModel = mongoose.model('User', UserSchema);


///module.exports= app;
module.exports= db;