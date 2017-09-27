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
          salary: "900000000000000000"
        }
      ];

      Jobs.create(jobs, done);
    });
  });

  // TODO: Write your tests for jobController here
    it('should have a method that given a job creates a new job in the database', function (done) {
        // test if the new job inserted to the function is created in the database
        // maybe i can instead find the NUMBER of intries in database if it increased 
        // an error shouldnt exist 
        // a fake job should be added and tested against
        fakejob={company: 'hiba',
          title: '1',
          description: "2",
          postedDate: "3",
          salary: "4"
        }
        should.not.exist(err);
        job.should.have.prorperty(title)
        ob.should.have.prorperty(description)
        ob.should.have.prorperty(postedDate)
        ob.should.have.prorperty(salary)
  });
      it('should have a method gets all jobs that have a salary greater than $50,000', function (done) {
        //tests if the returned value from the function is equal to all the jobs in the database that are more than 50000
        fakejob={company: 'hiba',
          title: '1',
          description: "2",
          postedDate: "3",
          salary: "443232222"
        }
       should.not.exist(err);
       // something here should be true because salary is>50000
  });
});
