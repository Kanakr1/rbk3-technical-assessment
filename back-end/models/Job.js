// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema ({
	company : String,
	title : String,
	description : String,
	postedDate : Date,
	salary : Number
})


module.exports = mongoose.model('Job', JobSchema );





/*
- [5] Inside `models/Job.js`, use `mongoose` to create and export a `Job` Mongoose model that has a schema that would handle an object with the following properties:
  - `company` - The name of the company the job is for
  - `title` - The title of the job
  - `description` - A description of the job
  - `postedDate` - When the job became available
  - `salary` - The offered salary for the position
- [ ] Ensure all of the `Job Model` tests pass
*/