// TODO: Create and export a mongoose model called `Job` that follows the description in the README

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/Myapp');
mongoose.connect('mongodb://username:password@host:port/database?options...');

var jobrschema=new Schema({
	company:'string',
	title:'string' ,
	description: 'string',
	postedDate:'boolean',
	salary:'number'});

var Job=mongoose.model(Job,jobrschema)

