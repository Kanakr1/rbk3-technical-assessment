var mongoose = require('mongoose');
var Job = require('./Job.js');

// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  Job.create(job, function (err, docs) {return docs}) 
  //callback will be function return the new job 
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  // Job.where('salary').gte(50000);
  Job.find({ salary: { $gte: 50000 }}, function (err, docs) {return docs});
};

