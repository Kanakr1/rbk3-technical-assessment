
// Create a new job in the database
// i think job here is an object?? 
// i will simply pass it without creating each value
exports.createJob = function (job, callback) {
  var newJob = new (job);
  newJob.save(function(err){
  	if (err) {
  		console.log("unable to save the new job try again")
  	}
  })
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
    job.find({salary: {$gte: 50000}}, function(err,data){
  	if (err) {
  		console.log('error occured')
  	}
  	console.log(data)
  })
};
