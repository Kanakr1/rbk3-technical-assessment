// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected');
});

var userSchema = mongoose.Schema({
    name: String,
    email: String
});
var User = mongoose.model('User', userSchema);

var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

module.exports.User = User;