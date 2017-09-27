//- Write a `User` Mongoose model
// - [ ] Look at the `exampleUser` object in `models/User.js`
//   - It reflects the structure of the data you would like to persist for your users
// - [ ] Inside `models/User.js`, use `mongoose` to create and export a `User` Mongoose model that has a schema that would handle an object with the same structure and keys as the `exampleUser` object already written
// - [ ] Ensure all of the `User Model` tests pass (`npm test` inside this problem's directory to run the tests)

// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };

//don't forget to install mongoose 
//npm install mongoose
// "dependencies": {"mongoose": "^4.11.13"}

//the test also need chai 
//$ npm install chai 

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

// mongoose.connect('localhost', 'gettingstarted');

// var connection = mongoose.createConnection('mongodb://localhost:27017/test'); // modefy this 

// var User = connection.model('User', userSchema);

//Export. error in the way of writting the export

// export default User;
// export User = new User();
// export default class {}

// run the test inside models 
//  mocha UserTest.js 

 // 1) User Model User should be a Mongoose model:
 //     TypeError: User is not a constructor
 //      at Context.<anonymous> (UserTest.js:8:12)

 //  2) User Model should have a schema:
 //     AssertionError: expected undefined to exist
 //      at Context.<anonymous> (UserTest.js:12:27)