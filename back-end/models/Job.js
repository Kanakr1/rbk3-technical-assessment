// - Write a `job` Mongoose model

//- [ ] Inside `models/Job.js`, use `mongoose` to create and export a `Job` Mongoose model that has a schema that would handle an object with the following properties:
//   - `company` - The name of the company the job is for
//   - `title` - The title of the job
//   - `description` - A description of the job
//   - `postedDate` - When the job became available
//   - `salary` - The offered salary for the position
// - [ ] Ensure all of the `Job Model` tests pass

// TODO: Create and export a mongoose model called `Job` that follows the description in the README

// Defining your schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  company:  String,  
  title: String,     
  description:   String,    
  postedDate: Date, // String  // OR  date: { type: Date, default: Date.now },
  salary: Number   //OR String
});

// Creating a model

var Job = mongoose.model('Job', jobSchema);

module.exports.Job;

//write the connection (copy & paste from user file)
//test doesn't run yet