// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
	name: 'Taka',
	email: 'taka@taka.com'
};

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');
var db=mongoose.connection;
db.once('open',function(){
	console.log(mongodb is open )
})

var UserSchema =mongoose.Schema({
	name:String,
	email: String
});
var User=mongoose.model('User',UserSchema);


module.exports=User;


