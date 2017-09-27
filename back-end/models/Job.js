// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require('mongoose');
var exampleJob = {
  company: 'RBK',
  title: 'HIR',
  description: "does things",
  postedDate: "20-2-2020",
  salary: "90"
};

// this schema will have 5 collomns 
// with this information 
  // - `company` - a string
  // - `title` - a string
  // - `description` -  a string (short descripton)
  // - `postedDate` - date
  // - `salary` - string
var job = new mongoose.Schema({
  company: String,
  title: String,
  description: String,
  postedDate: Date,
  salary: Number
});

var job = mongoose.model('job', job);

module.exports = job;
