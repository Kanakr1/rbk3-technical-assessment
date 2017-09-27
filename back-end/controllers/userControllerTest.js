var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('../models/User');

var UserMethods = require ('./userController.js');

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

  it('should have a method that given the name of a user, retrieves their record from the database', function (done) {
    UserMethods.getUserByName('Zach' , function (user) {
      console.log('user : ' , user);
      expect(user).to.exist;
      expect(user.email).to.equal('zach@zach.com');
      expect(user.name).to.equal('Zach');
      done();
    });
    
  });

  it('should have a method that given the name of a user, updates their `email` property', function (done) {
    var newEmail;

    UserMethods.updateEmailByName('Zack', 'newEmail@new.test', function(){
        User.find({
          name : 'Zack' 
        }, function (err, user) {
          console.log('test err : ', err, ' test user : ', user)
          if (!err)
            newEmail = user.email
        });
      expect(newEmail).to.equal('newEmail@new.test');
      // HINT: The `done` passed in is quite important...
      done();
    });


  });

  it('should have a method that reads all users from the database at once', function (done) {
    UserMethods.readAllUsers (function(users) {
      expect(users.length).to.equal(5)
    })
    done()
  });

});
