var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('../models/Job');
var jobController = require("./jobController") ;


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
          company: "osama",
          title: "php",
          description: "fullstack devloper",
          postedDate: "2nsa",
          salary: 2500
        },
        {
          company: "alaa",
          title: "fullstack devloper",
          description: "fullstack devloper",
          postedDate: "2nsa",
          salary: 5000
        },
        {
          company: "jafar",
          title: "android",
          description: "back-end",
          postedDate: "2nsa",
          salary: 500
        }
      ];

    });
  });

  it('should have a method that given the to create job in database', function (done) {
       if(expect(jobController.createJob).to.be.a("function")) {done()};

  });

  it('should have a method that given to return all jobs that have salary grater than 500', function (done) {
    if(expect(jobController.getHighPayingJobs).to.be.a('function')){done()};
  });

  
  

  // TODO: Write your tests for jobController here
});
