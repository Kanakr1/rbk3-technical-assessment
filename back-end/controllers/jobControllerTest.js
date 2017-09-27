var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('../models/Job');
var Control = require('./jobController')


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
      var jobs = [
        {
          company: 'RBK',
          title: 'HIR',
          describtion: 'some work',
          postedDate: 2017-09-30,
          salary: 800
        },
        {
          company: 'Google',
          title: 'Senior',
          describtion: 'some work',
          postedDate: 2017-09-30,
          salary: 800
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      Job.create(jobs, done);
    });
  });

  // TODO: Write your tests for jobController here
  it('should have a method that adds a job to the data base', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    Control.createJob({
          company: 'RBK',
          title: 'HIR',
          describtion: 'some work',
          postedDate: 2017-09-30,
          salary: 800
        }, function(err, data){
      console.log(data);
    });
    done();
  });
});
