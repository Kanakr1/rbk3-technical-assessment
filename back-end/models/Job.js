// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');
var db=mongoose.connection;
db.once('open',function(){
	console.log(mongodb is open )
})


var jobSchema=mongoose.Schema({
	company:String,
	title:String,
	description:String,
	postedDate:Date,
	salary:Number
});

var Job=mongoose.model('Job',jobSchema);

module.exports=Job;