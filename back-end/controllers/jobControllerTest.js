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
// can you bieleve?
  beforeEach(function (done) {
    clearDB(function () {
      var jobs = [
        {company: 'RBK',
          title: 'HIR',
          description: "does things",
          postedDate: "20-2-2020",
          salary: "90"
        },
        {company: 'RBK',
          title: 'HIR',
          description: "does things",
          postedDate: "20-2-2020",
          salary: "90"
        },
        {company: 'RBK',
          title: 'HIR',
          description: "does things",
          postedDate: "20-2-2020",
          salary: "90"
        },
        {company: 'RBK',
          title: 'HIR',
          description: "does things",
          postedDate: "20-2-2020",
          salary: "90"
        },
        {company: 'RBK',
          title: 'HIR',
          description: "does things",
          postedDate: "20-2-2020",
          salary: "90"
        }
      ];

      Jobs.create(jobs, done);
    });
  });

  // TODO: Write your tests for jobController here
    it('should have a method that given a job creates a new job in the database', function (done) {
    //this test should test the function if after 
    //the function is excuted 
    // in this case the test will check if the returned 
    // value from the function
    // is equal to the value of the email inside 
    // database
    expect().to.be()
  });
      it('should have a method gets all jobs that have a salary greater than $50,000', function (done) {
    //this test should test the function if after 
    //the function is excuted 
    // in this case the test will check if the returned 
    // value from the function
    // is equal to the value of the email inside 
    // database
    expect().to.be()
  });
});
