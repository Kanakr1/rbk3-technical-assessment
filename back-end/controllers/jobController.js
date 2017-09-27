
// Create a new job in the database
exports.createJob = function (job, callback) {
  job.add({job:'string'})
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  getHighPayingJobs('/Jobs',salary)
  Job.find('name').where(salary > 50000)

};
