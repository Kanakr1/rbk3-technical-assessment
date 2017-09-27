// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
var db = require('../db.js');
var jobschema = mongoose.Schema({
    company: String,
    title:String,
    description:String,
    postedDate:Date,
    salary:Number
});
var Job = mongoose.model('Job', jobschema);
module.exports Job;

