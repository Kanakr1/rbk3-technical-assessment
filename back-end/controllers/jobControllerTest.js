var expect = require('chai').expect;
var mongoose = require('mongoose');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      // TODO: Seed database with some jobs to run tests against. 
    });
  });
it('should have a method that given the name of a user, retrieves their record from the database', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    var user={name: 'Zach',
          email: 'zach@zach.com'}
          User.create(user,done);
    User.getUserByName(user.name,function (){
      var user={name: 'Zach',
          email: 'zach@zach.com'}
          User.create(user,done);
    });
  });
  // TODO: Write your tests for jobController here
});
