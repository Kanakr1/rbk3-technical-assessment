var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('../models/Job');

var JobMethods = require ('./jobController.js');

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
      var jobs = [
        {
          company : 'first company',
          title : 'first title',
          description : 'first description',
          salary : 200000
        },{
          company : 'second company',
          title : 'second title',
          description : 'second description',
          salary : 3000
        }
      ];
      Job.create(jobs, done);
    });
  });

  it('should have a method that creates jobs', function (done) {
    JobMethods.createJob({
          company : 'third company',
          title : 'third title',
          description : 'third description',
          salary : 3000
        } , function (err, data) {

           done();
        })
  })
  it('should have a method that reetrieves all jobs with salary greater than 50000', function (done) {
    JobMethods.getHighPayingJobs(function (err, data) {
      //do something
       done();
    })


   
  })
});






