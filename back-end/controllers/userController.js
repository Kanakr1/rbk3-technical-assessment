var db =require ('../db');
var Job=require('../models/User');
var mongoose = require('mongoose');
var promise =require('bluebird')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne({name:name}).exec(callback);
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.update({name:name},{email:newEmail},callback)
  
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}).exec(callback);
};
