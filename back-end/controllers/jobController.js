var mongoose = require("mongoose");
var Job = require('../models/Job');

// Create a new job in the database
exports.createJob = function (job, callback) {
  var Job = new Job()
  var query ="insert into Job "+job;
  Job.findOrCreat (query, function (err,data){
  	if (data){
  		return data
  	}
  	else {
  		console.error("there is an error :", err)
  	}
  })
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  var query= "select * from Job where salary > 50000";
  Job.findOn(query, function (err,data){
  	if (data){
  		return data
  	}
  	else {
  		console.error("there is an error :", err)
  	}
  })
};
