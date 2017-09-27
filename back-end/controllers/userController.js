

var User = require('User')

//this part is not that familiar with, i'll try my best with it and i will work on it later too.

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne({'name': 'name'}, callback(err, user));
  // i need to serch by the input that is entered, but with this search it will consider 'name' as string, which is not what we need, so we need a way to insert the input in the search.

  

};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
};
