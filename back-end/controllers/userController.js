var moddel = require('/User')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.find({ 'name': {name} } , callback)
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.find({ 'name': {name} });
  User.set('email', newEmail)
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({ });
};
