var db=require('../models/job')
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  db.save(function(err,data){
  	if(err){
  		console.log(err);
  	}
  	callback(job);
  })
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  db.findAll(db.salary,function(err,data){
  	if(err){
  		console.log(err);
  	}
  	else if(db.salary > 50.000){
  		db.findAll(db.title,function(err,titles){
  			if(err) console.log(err);
  			callback(titles);
  		})
  	}
  })
};