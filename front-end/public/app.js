
///by using get method we must return the users that we have in sting
///by using post method we must  create new users
//by using get method  Return JSON of single user with matching id


// I forget how to do it


angular.module('app')
	.component({
		'/get', function(req,res){
		return JSON.stringify(users)
},

})