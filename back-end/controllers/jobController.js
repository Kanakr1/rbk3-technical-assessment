var Job = require ('../models/Job.js');

// Create a new job in the database
exports.createJob = function (job, callback) {
  Job.create([job], function (err , data) {
  	callback(data)
  });
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  Job.find().where('salary').gt(50000).exec(callback)
};
