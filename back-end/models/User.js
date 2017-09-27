// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
  name: 'string',
  email: 'string'
});
mongoose.model("User", User);
module.exports = User;