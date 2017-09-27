var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var JobSchema = new Schema({

	 company: {type: String, required: true, unique: true},
	 title: {type: String, required: true, unique: true},
	 description: String,
	 postedDate: Date, //keep as is for now
	 salary: Number

});



var Job = mongoose.model('Job', JobSchema);
module.exports = Job;