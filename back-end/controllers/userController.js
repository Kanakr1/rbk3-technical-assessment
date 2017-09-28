var User = require('../models/User');
mongoose.connection.db // I dont sure about this

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
	// this function will invoke in get request 
	// so in the get request we have somthing like this
	// app.get('/',function(req,res){
		// var name = req.body.term
		//})
// // find all athletes who play tennis, selecting the 'name' and 'age' fields
// Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
//   if (err) return handleError(err);
//   // 'athletes' contains the list of athletes that match the criteria.
// })
		// now inside the data base we have a data like objects
		User.find({name:name}, function(err,user){
			if(err){
			 console.log('bad Data :'+ err)	
			} else {
			  exec(callback)
				// exec(function(user){
				// 	console.log(user)
				// })
			}

		})


  
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // update return to put method
  // I find bellow function to find one and update 
 var query = { name: name };
 User.findOneAndUpdate(query, { email: newEmail }, function(err,sth){
 		if(err){
 			console.log('this user not found': err)
 		} else{
 			exec(callback)
 		}
 })
 
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  	User.find({}, function(err,users){
			if(err){
			 console.log('bad Data :'+ err)	
			} else {
				// or exec(callback)
				exec(function(users){
					console.log(users)
				})
			}

		})
};
