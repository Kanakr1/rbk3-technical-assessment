var mongoose = require('mongoose');

var mongoUrl="http://localhost/jobquery"
mongoose.connect(mongoUrl);
var db=mongoose.connection;


var jobSchema = mongoose.Schema({jobs:String});

var jobs=jobSchema.model('jobs',jobSchema);



exports.createJob = function (job, callback) {
  var newJob=new jobs(job);
  newJob.save();
  callback(newJob);


};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
};
