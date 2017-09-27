const jobController = require('../models/Job');
// Create a new job in the database
exports.createJob = function (job, callback) {
  jobController.create (job, {new: true}, (err, newJob) => {
    if (err) console.log(err);
    callback (newJob);
  });
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  jobController.find ({salary: {$gt: 50000}}, {new: true}, (err, jobs) => {
    callback (jobs);
  });
};
