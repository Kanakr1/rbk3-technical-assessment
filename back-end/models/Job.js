// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var jobSchema = new mongoose.schema({
	name : String , 
	id : Number 
})

var job = mongoose.model('chai' , jobSchema);

module.exports = job;