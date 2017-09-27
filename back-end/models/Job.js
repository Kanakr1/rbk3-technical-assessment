// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
var mongoURI = "mongodb://localHost/doaa";
var db = mongoose.connection;
var Job = mongoose.Schema({
	job :String,
	salary : String
})
var Job = mongoose.model('Job', Job)
mongoose.connect(mongoURI,{useMongoClient: false});



db.on('error',function(){
	console.log("ERROR !!!!")
}).once('open', function(){
	console.log("SUCCESSFUL !!!!")
})

module.exports = Job;

