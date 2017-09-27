var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('../models/Job')
var controller = require('./jobController')

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
          job : "Engineer"
        },
        {
          job : "Teacher"
        },
      ];
      // TODO: Seed database with some jobs to run tests against. 
      Job.create(jobs, done);
    });
  });

  it("should create Job",function (done){
      expect(controller.createJob).to.be.a('function');
        return done();
  });

  it("should get High Paying Jobs",function (done){
      expect(controller.getHighPayingJobs).to.be.a('function');
        return done();
});
  });
