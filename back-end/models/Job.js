// TODO: Create and export a mongoose model called `Job` that follows the description in the README

 var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var Job = mongoose.Schema({
    company: String,
    title:String,
    description:String,
    postedDate:Number,
    salary:Number
});


module.exports = mongoose.model('Job', Job);


