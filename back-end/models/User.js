// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

//********************
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Jobs');

var JobSchema = new Schema({
  name: String,
  emain: String
});

var Job = mongoose.model('Job', JobSchema);

module.exports = Job;
