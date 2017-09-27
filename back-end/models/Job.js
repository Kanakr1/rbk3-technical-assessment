// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose=require("mongoose");
var mongoDB='172.0.0.1/job';
var jobSchema=mongoose.Schema({
	company:{
		type:String,
		require:true
	},
	title:{
		type:String,
		unique:true
	},
	description:{
		type:String
	},
	postedDate:{
		type:Date
	},
	salary:{
		type:Number
	}
});

var Job=mongoose.model('Job',jobSchema);

module.exports=Job;
