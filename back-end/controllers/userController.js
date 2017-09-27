
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
User.findOne({ 'name': 'Ghost' },function (err, user) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', user.name) 
})


};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  	user.where('_name':name).update({$set{email:newEmail}},function(err){
    user.save(function (err) {
        if(err) {
            console.error('ERROR!');
        }
    });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
	User.find({}, function(err, user) 
 {
    if (err)
    {
        res.send(err);
    }
    console.log(user);
    res.json(user);

});
};
