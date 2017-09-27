var Job = require('../models/Job')
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
Job.create({job:job},callback)

};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  
  Job.where('{salary}').gte(50000) 
  Job.find({salary:{ $gte: 50000 }},callback)

};
