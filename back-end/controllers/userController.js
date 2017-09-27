var User = require('./User.js');
var mongoose = require('mongoose');

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO 
  User.find({ name: name }, function (err, results) {
  if (err) {
    callback(err, null);
  }
  callback(null, results);
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.findOneAndUpdate({ name: name }, {$set: { email: newEmail} }, { new: true }, function (err, results) {
  if (err) {
    callback(err, null);
  }
  callback(null, results);
  });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}, function (err, results) {
  if (err) {
    callback(err, null);
  }
  callback(null, results);
  });
};
