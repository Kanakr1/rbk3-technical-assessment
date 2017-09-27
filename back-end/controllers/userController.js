var User = require ('../models/User.js');
var Job = require ('../models/Job.js');



// Given the name of a user, retrieve their record from the database

exports.getUserByName = function (name, callback) {
  User.findOne({
  	name : name 
  }, function (err, user) {
  	if (!err)
  	  callback(user)
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // User.update({name : name}, { email: newEmail} , {multi : false} , function (err, data) {
  //   if (err) {
  //     console.log('controller err : ' , err);
  //   } else {
  //     console.log('contr. data : ' , data)
  //     callback(data)
  //   }
  // });
  //in case first one didn't work ..
  User.find({ name: name }, function (err, doc){
    console.log('doc : ' , doc ,' err : ' ,err);
    doc.email = newEmail;
    callback(doc)
    doc.save();
  });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  User.find().exec(
    callback
    )
  
};
