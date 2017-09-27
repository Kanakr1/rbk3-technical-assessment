// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    name: String,
    email: String
});
var Job = mongoose.model('Job', jobSchema);

module.exports.Job = Job;