var mongoose = require('mongoose');
var User = require('../models/User');
var db = 'mongoose://localhost/user';
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne({name:'name'},function(err,obj){
  	console.log(obj);
  });


};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  //  User.update({name:'name'},function(err,obj){
  // 	console.log(obj);
  // });
// here I want to get the user by name and after that update the email 
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({} ,function(err, user){
  	user.toArray(callback);
  	
  }
};
