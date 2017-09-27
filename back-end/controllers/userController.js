var mongoose = require('mongoose');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  var User = mongoose.model('User', UserSchema);
  User.select('name', function (err, User) {
  if (err) return handleError(err);
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
	User.update({name: name}, {
    name: newUser.name, 
    email: newUser.email
	}
  	
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  	User.find(function (err, User) {
  if (err) return console.error(err);
  console.log(User);
})
};
