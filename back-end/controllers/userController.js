

var User = require('User')
var mongoose = require('mongoose');

//this part is not that familiar with, i'll try my best with it and i will work on it later too.

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne({'name': name}, callback(err, user));
  
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.findOne({'name': name}, callback(err, user))
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}, callback(err, users));
};


