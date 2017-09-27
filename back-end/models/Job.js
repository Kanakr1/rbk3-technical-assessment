// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
	company: String,
	title: String,
	description:String,
	postedDate:Number,
	salary:Number
})

var Job = mongoose.Model('Job', JobSchema);
module.exports = Job;
