// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
var mongoURI = "mongodb://localHost/doaa";
var db = mongoose.connection;
var User = mongoose.Schema({
	name :String ,
	email :String
})

var User = mongoose.model('User' ,User)
mongoose.connect(mongoURI, { useMongoClient: false });


db.on('error',function(){
	console.log("ERROR !!!!")
}).once('open', function(){
	console.log("SUCCESSFUL !!!!")
})



module.exports = User;


