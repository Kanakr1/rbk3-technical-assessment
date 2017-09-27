// TODO: Create and export a mongoose model called `Job` that follows the description in the README


// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose  =require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/alaa');

var db = mongoose.connection;
db.on('error', console.error.bind(console , 'connection error'));
db.on('open',function() {
	console.log(' db is connecting')
})	

var exampleJob = new Schema({
  company: String,
  title: String,
  description: String,
  postedDate: String,
  salary: Number
});

var Job = mongoose.model('Job', exampleJob);
module.exports =Job;


