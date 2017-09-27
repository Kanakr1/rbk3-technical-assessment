
// Create a new job in the database

exports.createJob = function (job, callback) {
  // TODO
  db.Job.insert(job);

};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  db.Job.find( { salary: { $gt: 50000} } )
};
