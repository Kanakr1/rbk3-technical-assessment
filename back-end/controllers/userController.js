var db=require("../models/User")
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  db.findOne(db.name,function(err,data){
  	if(err){
  		console.error(err);
  	}
  	callback(data);
  })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  db.findOne(db.name,db.email,function(err,data){
  	if(err){
  		console.error(err);
  	}
  	else if(db.name===name){
  		db.email=newEmail;
  		callback(data);
  	}
  })
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  db.findAll(db.name,function(err,data){
  	if(err){
  		console.error(err);
  	}
  	callback(data);
  })
};
