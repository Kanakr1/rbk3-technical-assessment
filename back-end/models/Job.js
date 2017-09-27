// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','db')

var Schema = mongoose.Schema;
var JobSchema = new Schema({
	company: String,
	title: String,
	description: String,
	postedDate: Date,
	salary: Number

})

var Job = db.model('Job',JobSchema);
module.exports = Job;

// object with the following properties:
//   - `company` - The name of the company the job is for
//   - `title` - The title of the job
//   - `description` - A description of the job
//   - `postedDate` - When the job became available
//   - `salary` - The offered salary for the position