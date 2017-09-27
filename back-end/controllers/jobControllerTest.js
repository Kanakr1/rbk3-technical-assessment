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
      var jobs = [{company: "IT" , title:"programer" , describtion: "programer" , postedDate: 2-3-2000 , salary: 900} , {company: "data" , title:"dataEntry" , describtion: "dataEntry" , postedDate: 2-10-2015 , salary: 300}];
    
    });
  });

  // TODO: Write your tests for jobController here
  describe('createJob', function () {

      it('should be function', function () {
        expect('createJob').to.be("Function");
      });
  });


   describe('getHighPayingJobs', function () {

      it('should be function', function () {
        expect('getHighPayingJobs').to.be("Function");
      });

      it('should return jobs have such that job.salary > 50000', function () {
        expect('job.salary').to.be(> 50000);
      });
  });
});
