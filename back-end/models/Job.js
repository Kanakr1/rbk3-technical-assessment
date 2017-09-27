// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var db= mongoose.connection;

 mongoose.connect('mongodb: //models.db')

var JobSchema= new Schema ({
	company : String,
	title: String,
	description: String,
	postedDate: {type : Date},
	salary: Number
});

db.on('error',console.error.bind(console, 'connection error'));

db.once('open',function callback(){
	console.log('connect to database')
})
var JobModel = mongoose.model('Job', JobSchema);

module.exports= db;