// - Write tests for a `userController` which will have 3 methods for performing MongoDB operations on users
// - Write the `userController` that will make your tests pass

// - [ ] Look at `controllers/userController.js`
//   - It contains a skeleton for the methods that should be exported by the User controller
// - [ ] Look at `controllers/userControllerTest.js`
//   - It contains a skeleton to write tests for the not-yet-written `userController`
// - [ ] Inside `controllers/userControllerTest.js`, write in the unit tests for the `userController` methods
//   - Use the skeleton `it` statements provided
// - [ ] Inside `controllers/userController.js`, build out the method skeletons provided and make your tests pass

var mongoose = require('mongoose');
var User = require('./User.js');

//Connection
		mongoose.connect('mongodb://localhost/test');
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function callback () {
		  console.log("h");
		});

exports.test = function(req,res) {
  res.render('test');
};

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO

  // User.find({ name: name }).exec(callback);
  //OR User.find().where('name').eq(name).exec(callback);
  User.find({'name': name}, function(err, docs){
  	if(err){console.log('can not fount')}
    console.log(docs);
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.find({'name': name}).update({ email: newEmail }, function(err, docs){
    console.log('done')
  });;
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.get(*, function(err, docs){
    console.log(docs);
  })
};
