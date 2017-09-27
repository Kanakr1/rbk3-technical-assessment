var mongoose = require("mongoose");
var User = require("../models/User")
mongoose.connect('mongodb://localhost/jobquery');

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne({'name':name}).then(callback);
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.where({'name' : name}).update({ email : newEmail }).then(callback);
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}).then(callback);
};
