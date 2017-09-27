
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
   return User.find({ name:name}).exec(function(result){
   	callback(result)
   })
 }

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.findOneAndUpdate({name:name},{$set:{email:newEmail}}).callback(err,result){
  	
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  return User.findAll({}).exec(callback(err,result){

  })

};
