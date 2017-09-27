var Job = require('../models/Job')
// Create a new job in the database
exports.createJob = function (job, callback) {
   Job.create({job : job}, function(data){
   		if(err){
   			throw error
   		}
   		callback(null, data )
   });
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  jobs = Job.find().where('salary').gt(50000);
  callback(jobs);
};
