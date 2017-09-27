
// Create a new job in the database
var Job = require('Job')
var mongoose = require('mongoose');

exports.createJob = function (job, callback) {
  // TODO
	 var job = new Job({
	 	// the entered job information go here 
	 })
	 job.save();
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  User.find()
};
