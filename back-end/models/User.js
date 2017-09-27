// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require("mongoose");
var Schema= mongoose.Schema ;

//connection 
 mongoose.connect('mongodb://localhost/myapp');


var User = new Schema({
   name : String ,
   email: String 
});

var user = mongoose.model('user',User);


var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

module.exports = user ;


