var mongoose = require("mongoose");
var User = require('../models/User');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  var query = "select * from User where name = name";
  User.findOn (query, function (err,data){
  	if (data){
  		return data;
  	}
  	else {
  		console.error("there is an error :", err)
  	}
  })

};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  var query="Update User SET email = newEmail where name = name"
    User.findOrCreat (query, function (err,data){
  	if (data){
  		return data;
  	}
  	else {
  		console.error("there is an error :", err)
  	}
  })
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  var query= "select * from User"
    User.findOn (query, function (err,data){
  	if (data){
  		return data;
  	}
  	else {
  		console.error("there is an error :", err)
  	}
  })
};
