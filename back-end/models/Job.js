// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var jobSchema = new mongoose.schema({
	company : String , 
	title : String,
	description :String,
	postedDate : Date,
	salary : Number
})

var job = mongoose.model('chai' , jobSchema);

module.exports = job;