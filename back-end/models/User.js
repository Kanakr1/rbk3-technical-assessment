// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};
 var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var User = mongoose.Schema({
    name: String,
    email:String
});


module.exports = mongoose.model('User', User);




