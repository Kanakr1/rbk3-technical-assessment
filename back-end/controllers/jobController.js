var mongoose = require('mongoose');
var Job = require('../models/Job.js');

// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var jobb = new Job ({
  	company: job.company,
    title: job.title,
    description: job.description,
    postedDate: job.postedDate,
    salary: job.salary
  });

  jobb.save(function(err){
  	if (err) console.log(err);
    callback(err, jobb)
  });

  
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  Job.find({salary:  {$gt : 50000} }, function(err, data){
    if (err) console.log(err)
  	callback(err, data)
  })
};
