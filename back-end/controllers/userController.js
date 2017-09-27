var User = require('../models/User');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  User.findOne({"name":name}, function (error,user) {
  	if(error){
  		throw error
  	}
  	callback(null , user);
  })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
   User.findOne({"name":name}, function (error,user) {
  	if(error){
  		throw error
  	}
  	user.email = newEmail;
  	callback(null , user);
  })
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  callback(User.find())
};
