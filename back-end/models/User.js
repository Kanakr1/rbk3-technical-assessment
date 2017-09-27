// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var UserModel = new Schema ({
	name: String,
	email: String
});

var User = mongoose.model('User', UserModel);

var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};


module.exports = User;