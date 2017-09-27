
// Given the name of a user, retrieve their record from the database
//use findone
// callback will take err,data
exports.getUserByName = function (name, callback) {
 user.findone({"name":name}, "email", function(err,data){
 	if (err) {
 		console.log("an error happend trying to find the email")
 	}
 	console.log(user.email)
 })
};

// Given the name of a user, update their `email` property
//use update ?? insert

exports.updateEmailByName = function (name, newEmail, callback) {
	var query = {name : name}
  user.update(query, {email: newEmail}, function(err,raw){
 	if (err) {
 		console.log("an error happend trying to update")
 	}  	
 	console.log("resopse: ", raw)
  })
};

// use findall
// Read all users from the database at once
exports.readAllUsers = function (callback) {
  user.find({}, function(err,data){
  	if (err) {
  		console.log('error occured')
  	}
  	console.log(data)
  })
};
