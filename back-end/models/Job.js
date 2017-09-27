// TODO: Create and export a mongoose model called `Job` that follows the description in the README


// var mongoose = require('mongoose');
// var db = mongoose.createConnection('localhost', 'test');

// var schema = mongoose.Schema({
//  company: 'string',
//  title: 'string',
//  description: 'string',
//  postedDate: 'Date',
//  salary: 'Number'
//   });
// var Job = db.model('Job', schema);



var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Job = new Schema({
 company: 'string',
 title: 'string',
 description: 'string',
 postedDate: 'Date',
 salary: 'Number'
  });
mongoose.model("Job", Job);
 module.exports = Job; 
