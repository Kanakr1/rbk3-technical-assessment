// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  company:  String,
  title: String,
  description: String,
  postedDate: Date,
  salary: Number
});

JobSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Job').find({ type: this.type }, cb);
};

var Job = mongoose.model('Job', JobSchema);
