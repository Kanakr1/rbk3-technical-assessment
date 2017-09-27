// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
var schema=mongoose.Schema;
var jobSchema=new schema({
companyname:String,
title:String,
description:String,
postedDate:Number,
salary:Number
})

var Job=mongoose.model('Job',jobSchema)
module.exports=Job;