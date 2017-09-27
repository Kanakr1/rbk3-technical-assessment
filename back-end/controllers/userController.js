
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
 var username = User.find({ name:name}).exec(callback(err,result){
 	
 })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.findOneAndUpdate({name:name},{$set:{email:newEmail}}).exec(callback(err,result){
  	
});

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.findAll({}).exec(callback(err,result){

  })

};
