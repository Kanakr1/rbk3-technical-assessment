
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
var obj = new Job({
        company: job.body.company,
        title: job.body.title,
        description: job.body.description,
        postedDate: job.body.postedDate,
        salary: job.body.salary
    });
callback(job);
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  if(salary>50000){
   Job.find(function (err, job) {
        callback(null, job)
    }
  }

};

// var Job = require('db');
// var peter = new Job();