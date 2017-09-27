var mongoose=require('mongoose');
var User=require('../models/User.js');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne({'name':name},function(err,user){
  	if(err){
  		throw err;
  	}else{
  		callback(user);
  	}
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.update({name:name},{$set:{email:newEmail}},callback);

};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({},function(err,users){
  	if(err){
  		throw err;
  	}else{
  		callback(users);
  	}
  })
};
