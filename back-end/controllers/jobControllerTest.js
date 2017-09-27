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
      Jop.create(jops, done);
    });
  });

  // TODO: Write your tests for jobController here

  it('should have a method that given the name of a jop, retrieves their record from the database', function (done) {
     return db.find({type: 'Jop'}).should.eventualy.have.length(5);
  });

});
