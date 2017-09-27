
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var job=new Job({
  	company:'aaaaa',
	title:'amman',
	description:'building',
	postedDate:20/10/2017,
	salary:500

  })
  .callback(err,job){
  	if(err){
  		console.log(err)
  	}
  }
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  Job.find({}).where('salary').gt(50000).exec(callback(err,result){
  

  	}
  })
};
