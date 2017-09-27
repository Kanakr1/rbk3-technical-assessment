// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose=require('mongoose');

var schema= new mongoose.Schema({
	company: String,
  	title: String,
  	escription: String,
  	postedDate: Boolean,
  	salary: Number

});

var Job= mongoose.model('Job', schema);

module.exports= Job;
