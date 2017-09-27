// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

//********************
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Jobs');

var UserSchema = new Schema({
  name: String,
  emain: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
