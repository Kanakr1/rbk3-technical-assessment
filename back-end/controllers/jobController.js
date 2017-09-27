var moddel = require('/Job')
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  Job.create({     company: job.company, 
				   title: job.title ,
				   description:job.description ,
				   postedDate: job.postedDate ,
				   salary: job.salary
				} , callback);

	};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  return Job.find({salary:{$gt:50000}} , callback)
};
