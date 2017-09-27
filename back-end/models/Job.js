// TODO: Create and export a mongoose model called `Job` that follows the description in the README
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/jobquery');

var jobSchema = new Schema({
  company: String,
  title: String,
  description: String,
  postedDate: Date, // Might need to change to { type: Date, default: Date.now }
  salary: Number
});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;
