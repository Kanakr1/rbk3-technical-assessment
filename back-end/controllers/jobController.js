var mongoose=require('mongoose');
var Job=require('../models/Job.js');
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var job = new Job({
  	company:job.company,
  	title:job.title,
  	description:job.description,
  	postedDate:job.postedDate,
  	salary:job.salary
  }).save(function(err,job){
  	if(err){
  		throw err;
  	}else{
  		callback(job);
  	}
  });
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  Job.find({}).where('salary').elemMatch({salary:{$gte:50000}})
};
