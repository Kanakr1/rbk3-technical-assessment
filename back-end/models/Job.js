// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Job = new Schema ({
	company: String,
	title: String,
	description: String,
	postedDate: String,
	salary: Number
});
module.exports = mongoose.model('Job', Job);


