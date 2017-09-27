const User = require('../models/User');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  User.findOne ({name: name}, 'name email', (err, user) => {
    if (err) console.log(err);
    callback (user);
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  User.findOneAndUpdate ({name: name}, {email: newEmail}, {new: true}, (err, user) => {
    if (err) console.log(err);
    callback (user);
  });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  User.find ({}, (err, users) => {
    callback (users);
  });
};
