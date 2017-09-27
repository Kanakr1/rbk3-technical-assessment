var db = require('../models/User')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  db.findOne({ name: name }, callback())

  
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  db.update({email : newEmail},{ $set: { name: name}},callback())
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  db.find({},callback());
};
