// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({

	 name: {type: String, required: true, unique: true},
	 email: {type: String, required: true, unique: true}
});



var User = mongoose.model('User', UserSchema);
module.exports = User;



