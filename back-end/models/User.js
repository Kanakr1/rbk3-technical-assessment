// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

// this schema will have two collomns 
// name and email
var user = new mongoose.Schema({
	name: String,
	elmail: String
});

var user = mongoose.model('user', user);

module.exports = user;