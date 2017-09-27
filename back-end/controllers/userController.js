

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  // I have to connect to mongoose to get the data from the database and read it 
  // send get request to the server to fetch the data I want  
  //make a connect btween the server and the database to bring them
  mongoose.connect('mongodb://localhost/jobquery');
  var db=mongoose.connection;
  //once the function run  start listen 
  db.once('open',function callback(){
  		console.log("connected now")
  }).on('error', console.error.bind('error:', error))

  //as it's start listening now make a get request to fetch our user model
  //we can console.log mongoose.model.name for our user
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  //should search for the name object and assign the (newEmail) 
  //to the property email of the user object 
  //and the call back the new one 
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  // get request to give back a res of all users 

  User.find().lean().exex(function(err, users){
    return res.end(JSON.stringify(users))
  });

  // get('../models/User.js', function(){
  //  User.findAll({})
  //  .then()
  // })
   
  
};
