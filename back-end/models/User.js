// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

//don't forget to install mongoose .......................

// Defining your schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  email: String
  // there is no id in the example so I will not write it 
});

// Creating a model

var User = mongoose.model('User', userSchema);

//Connections

mongoose.connect('localhost', 'gettingstarted');

var connection = mongoose.createConnection('mongodb://localhost:27017/test'); // modefy this 

var User = connection.model('User', userSchema);

// export default User;
export User;