var mongoose = require('mongoose');
var job= require('../models/Job.js')

// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  Job.find(function(err,job){
		if(err){
		console.log(err ,' : you dont have a job');
		}
		callback();
	})
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
   Job.find(function(err, job){
   	if(err){
   		console.log('err');
   	}
   	else{
   		callback()
   	}
  })
};
