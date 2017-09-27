
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.findOne(name,function(err,email){
  	
  	then.send(email)
  }
  })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.findOne(name,function(err,newEmail){
  	
  })
  then.
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
};
