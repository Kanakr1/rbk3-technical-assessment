
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  db.products.insert({jop: jop})
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  db.collection.find({job:{salary:50.000}})
};
