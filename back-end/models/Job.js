// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB)
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var exampleJob = {
//   occupation: 'technical support',
//   salary: 10000
// };

var jobSchema= mongoose.Schema({
	occupation:String,
	salary:Number
})

var Job = mongoose.model('Job',jobSchema)


module.exports=Job

