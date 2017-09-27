
// Create a new job in the database
exports.createJob = function (job, callback) {
  	JobModel.create({ title: job }, function (err, job) {
  		if (err) return handleError(err);
	});
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  Job.
  find().
  where('salary').gt(50,000)
  select('Job.title').
  exec(callback); 
};
