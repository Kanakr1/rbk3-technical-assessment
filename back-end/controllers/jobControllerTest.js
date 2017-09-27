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

  // TODO: Write your tests for jobController here
it('should have a method that given the the job object , save them to the database ', function (done) {


job={company: 'New Horizon',
          title: 'Trainer',
          description:'Training IT courese',
          postedDate:22-10-2015,
          salary:15000
        }
         
    Job.createJob(job,function (){

          done();
    });
  });

it('should have a method that return the jobs with the salary bigger than 50000 ', function (done) {


job={company: 'New Horizon',
          title: 'Trainer',
          description:'Training IT courese',
          postedDate:22-10-2015,
          salary:51000
        }
         
    Job.getHighPayingJobs(function (){

          done();
    });
  });
  

