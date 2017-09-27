
var mongoose= require('mongoose');
var user= require('../models/User.js')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
	User.find(function(err,user){
		if(err){
		console.log(err ,' : the name not found');
		}
		callback(user.name);
	})

};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
   user.find(function(err,data){
   		if(err){
   			console.log('the user dosenot have newEmail');
   		}else{
   			callback(name.data)
   		}
   })

};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  user.find(function(err,user){
  	    if(!err){
  		callback(user);
  	   }
   })
};
