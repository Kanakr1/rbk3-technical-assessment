var job = require(../models/jobs)
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var newJob = new job ({
  	company : "RBK" , 
	title : "HIR",
	description :"Teacher",
	postedDate : "2017-03-21",
	salary : 600
  })
  return callback()
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  find({salary : ">50000"},function (err , job) {
  	/* body... */
  	return callback();
  })
};
