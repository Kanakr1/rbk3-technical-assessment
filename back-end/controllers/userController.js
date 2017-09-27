var mongoose = require('mongoose');
var User=require('../models').User;
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  callback(User.findOne({name:name}));

};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  User.findOne({name:name},function (err,data) {
    data.email=newEmail;
  })
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  User.find({},function (err,data) {
    console.log(data);
  })
};
