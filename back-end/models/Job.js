// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
var schema=mongoose.Schema;
var jobSchema=new schema({
	job:String
})

var Job=mongoose.Model('Job',jobSchema)
Module.export=Job;