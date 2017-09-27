// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','db')

var Schema = mongoose.Schema;
var UserSchema = new Schema({
	name:  String,
	email: String
})

var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

var User =db.model('User',UserSchema)
module.exports = User;
