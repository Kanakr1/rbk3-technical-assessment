// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB)
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };

var userSchema= mongoose.Schema({
	name:String,
	email:String
})

var User = mongoose.model('User',userSchema)


module.exports=User




