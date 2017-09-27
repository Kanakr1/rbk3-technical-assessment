var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('../models/User');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['users'].remove(done);
};

describe('User Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Clear database before each test and then seed it with example `users` so that you can run tests
  beforeEach(function (done) {
    clearDB(function () {
      var users = [
        {
          name: 'Magee',
          email: 'magee@magee.com'
        },
        {
          name: 'Dan',
          email: 'dan@dan.com'
        },
        {
          name: 'Beth',
          email: 'beth@beth.com'
        },
        {
          name: 'Sunny',
          email: 'sunny@sunny.com'
        },
        {
          name: 'Zach',
          email: 'zach@zach.com'
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      User.create(users, done);
    });
  });
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    //expect(new Job()).to.be.instanceOf(mongoose.Model);
  it('should have a method that given the name of a user, retrieves their record from the database', function (done) {
    //this test should test the function if after 
    //the function is excuted 
    // in this case the test will check if the returned 
    // value from the function
    // is equal to the value of the email inside 
    // database
    expect().to.be()
  });
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
  it('should have a method that given the name of a user, updates their `email` property', function (done) {
    //this test should test the function if after 
    //the function is excuted the data base is changed 
    //or not 
    // if the input of the function 
    // is equal to the new value in data base
    expect()
  });
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
  it('should have a method that reads all users from the database at once', function (done) {
    //this test should test the function if after 
    //the function is excuted the data returned
    // from the function is equal to the all users in db
    expect()
  });

});
