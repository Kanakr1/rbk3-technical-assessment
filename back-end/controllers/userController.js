
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  var query = {
            name: {$regex : name}
    }
    User.find(query,callback);
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
   this.getUserByName(name, function (err, oldEmail) {
    if(err) {
      callBack(err);
    } else {
      upsertObject(newEmail, oldEmail).save(callBack);
    }
  });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find(function (err, job) {
        callback(null, User)
    }
};
