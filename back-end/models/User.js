// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };

var mongoose = require('mongoose') ;
var schema = mongoose.schema;

var userSchema = mongoose.Schema({
	name : string ,
	email : string
});

var users = mongoose.model('user', userSchema);
