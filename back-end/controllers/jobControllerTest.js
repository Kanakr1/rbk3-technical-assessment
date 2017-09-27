var expect = require('chai').expect;
var mongoose = require('mongoose');
const jobController = require('./jobController');
const Job = require('../models/Job');

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
      var date = new Date();
      var d = date.getDate();
      // TODO: Seed database with some jobs to run tests against.
       var jobs = [
         {
           company: 'Gaming lab',
           title: 'Game Developer',
           description: 'A person who can write a code in games',
           postedDate: new Date().getDate(), // Might need to change to { type: Date, default: Date.now }
           salary: 50500
         },
         {
           company: 'Ubisoft',
           title: 'Game Designer',
           description: 'A person who controlls the proccess of building the game',
           postedDate: new Date().getDate(), // Might need to change to { type: Date, default: Date.now }
           salary: 70500
         },
         {
           company: 'Ubisoft',
           title: 'Game Artest',
           description: 'A person who make the graphics of the game',
           postedDate: new Date().getDate(), // Might need to change to { type: Date, default: Date.now }
           salary: 40000
         }
       ];

       Job.create(jobs, done);
    });
  });

  // TODO: Write your tests for jobController here
  it ('should create a new job in the database.', function (done) {
    var job = {
      company: 'EASports',
      title: 'Game Developer',
      description: 'A person who make the code in FIFA',
      postedDate: new Date().getDate(), // Might need to change to { type: Date, default: Date.now }
      salary: 120000
    };
    jobController.createJob (job, (newJob) => {
      expect(newJob.title).to.equal(job.title);
      done();
    });
  });
  it ('should return an array of all users that have salary larger than 50,000.', function (done) {
    jobController.getHighPayingJobs ((jobs) => {
      expect(jobs.length).to.equal (2);
      done();
    });
  });
});
