var mongoose = require('mongoose');
var Job = require('../models/Job');
// Create a new job in the database
exports.createJob = function (job, callback) {
  var newJob= new Job({
  	occupation: job
  })
    callback(); 
};
// or maybe we can sole above part with Job.creat(job,done)

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // the query here it will be > greater than $50,000
  var query = {salary:jobs[salary]>50000}
  //what am thinking about acually is to bring the jobs which is
  // an array and iterate over it and catch the payed jobs more than 50000

  User.find(query, function(err,res){
			if(err){
			 console.log('bad Data :'+ err)	
			} else {
			  exec(callback(res))
				
			}

		})
};
