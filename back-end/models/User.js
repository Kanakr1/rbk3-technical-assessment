// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');
var db = require('../db.js');
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};
var userschema = mongoose.Schema({
    name: String,
    email:String
});
var User = mongoose.model('User', userschema);
module.exports User;
