var mongoose = require('mongoose');
var User = require('../models/User.js');

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.find({name: name}, function(err, data){
  	if (err) callback(err)
  	callback(err,data)
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.find({name: name}, function(err, data){
  	if (err){
  		callback(err);
  	}else{
  	data[0].email = newEmail;
  	callback(err, data);
     };
  });
  
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}, function(err,data){
  	callback(data);
  });
};
