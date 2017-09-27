// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
	name : String ,
	email : String
})

module.exports = mongoose.model('User', UserSchema );

/*
- [5] Look at the `exampleUser` object in `models/User.js`
  - It reflects the structure of the data you would like to persist for your users
- [5] Inside `models/User.js`, use `mongoose` to create and export a `User` Mongoose model that has a schema that would handle an object with the same structure and keys as the `exampleUser` object already written
- [5] Ensure all of the `User Model` tests pass (`npm test` inside this problem's directory to run the tests)*/