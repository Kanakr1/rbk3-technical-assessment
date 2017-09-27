// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');

var mongoUrl="http://localhost/App"
mongoose.connect(mongoUrl,function () {
  console.log('connected!');
})

var Schema = mongoose.Schema({name:String,email:String},function (err) {
  if(err){
    console.log(err)
  }
});

var User = mongoose.model('User',Schema);


var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

var newUser=new User(exampleUser);


newUser.save(function (err) {
  if(err){
    console.log(err);
  }
});
module.exports=mongoose.model('User',Schema);
