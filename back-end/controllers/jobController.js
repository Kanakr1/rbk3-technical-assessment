var mongoose = require("mongoose");
var Job = require("../models/Job")
mongoose.connect('mongodb://localhost/jobquery');

// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  Job.create(job).then(callback);
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  Job.find({}).where('salary').gt(50,000).then(callback);
};
