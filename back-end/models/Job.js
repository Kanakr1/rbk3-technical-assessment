// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose = require('mongoose');
var Schema = mongoose.Schema ;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.loge(connected);
}); 

var jobSchema =  mongoose.Schema({	
		company : String,
		title : String,
		describtion : String ,
		postedDate: Number,
		salary : Number


});

var Job = mongoose.model('Job',jobSchema);
module.exports = Job ;

