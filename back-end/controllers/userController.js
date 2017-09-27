
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  db.User.find( { name: {$exists : true} } )
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  db.User.findOneAndUpdate(
   { "name" : name },
   { $inc: { "email" : newEmail} }
)
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  db.User.find()
};
