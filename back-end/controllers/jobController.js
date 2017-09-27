var Job = require('./Job.js');
var mongoose = require('mongoose');
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var newJob = new Job({
  	company: job.company,
    title: job.title,
    description: job.description,
    postedDate: job.postedDate,
    salary: job.salary
  });
  newJob.save(function(err, doc) {
    if(err) {
      callback(err, null);
    }
    callback(null, doc);
  });
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  Job.find({ salary: {$gt: 50000} }, function(err, results) {
  	if(err) {
      callback(err, null);
    }
    callback(null, results);
  });
};
