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


      var Jobs=[{
        companyname:'mm',
  title:'nnn',
  description:'aas',
  postedDate:12/1/2017,
  salary:200

      },
            companyname:'nn',
  title:'ntt',
  description:'aaww',
  postedDate:11/1/2017,
  salary:233
]

    });
  });

  // TODO: Write your tests for jobController here
});
