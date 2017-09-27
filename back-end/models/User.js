// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = requier('mongoose');
var Schema = mongoose.Schema ;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.loge(connected);
}); 


var userScheme = mongoose.Schema({
  name: 'Taka',
  email: 'taka@taka.com'
});

var User = mongoose.model('User',jobSchema);
module.exports = User ;