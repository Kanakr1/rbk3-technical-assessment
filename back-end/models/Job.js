var mongoose = require('mongoose');

var mongoUrl="http://localhost/jobquery"
mongoose.connect(mongoUrl,function () {
  console.log('connected!');
})

var Schema = mongoose.Schema({jobs:String},function (err) {
  if(err){
    console.log(err)
  }
});

var Job = mongoose.model('Job',Schema);


module.exports=mongoose.model('Job',Schema);
// TODO: Create and export a mongoose model called `Job` that follows the description in the README
