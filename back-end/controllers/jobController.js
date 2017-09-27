var db =require ('../db');
var Job=require('../models/Job');
var mongoose = require('mongoose');
var promise =require('bluebird')
// Create a new job in the database
exports.createJob = function (job, callback) {

  Job.save(function (err,job){
   if (err){
   	console.log (err)

   }
   else {
   	callback(job);
   }
  })

 //or 
 //Job.create(job);

};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  
  Job.find({salary: { $gt: 50000 }}).exec(callback);
  
};
