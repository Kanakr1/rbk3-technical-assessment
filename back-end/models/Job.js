// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose') ;
var schema = mongoose.schema;

var jobSchema = mongoose.Schema({
	  company : string
	  title  : string
	  description : string
	  postedDate :
	  salary : 
});

var jobs = mongoose.model('job', jobSchema);
 