// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: String,
	email: String
});
module.exports = mongoose.model('User', User)