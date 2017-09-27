var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job=require('../models/Job');
var jobController=require('./jobController.js')


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
      var jobs=[
      {
        company:'RBK',
        title:'HR',
        description:'responsible for students stuff tech and soft skills',
        postedDate:'2017-11-31',
        salary:1000
      },
      {
        company:'Oracle',
        title:'Oracle developer',
        description:'build database',
        postedDate:'2017-11-31',
        salary:1000
      }
      ];

      Job.create(jobs,done)
    });
  });

  // TODO: Write your tests for jobController here
  it('should have Create a new job in the database method',function(done){
    expect(jobController.createJob).to.exist;
    done();
  });

  it('should have getHighPayingJobs method that returns all jobs which get more than 50000 salary',function(done){
    expect(jobController.getHighPayingJobs).to.exist;
    done();
  })
});
