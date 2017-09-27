
user = require('../models/User.js')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  user.find({name : name},function (err , data) {
  	/* body... */
  	return data;
  })

};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  user.update({name : name} , {email : newEmail},function(err , update){
  	 return update.name;
  })
};


// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  user.find({},function (err , update) {
  	/* body... */

        return update;
    
  })
};
