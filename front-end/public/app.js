angular.module('userApp', []);
.controller('appController', function() {
 var usersList=this;

 usersList.users=[];
 usersList.addUser=function(){
 	usersList.users.push({user:usersList.user});
 	usersList.user="";
 };

 usersList.viewUers=function(){
 	angular.forEach(usersList.users, function(user)){
 		return user;
 	}
 	// I have to getData from server 
 }



});

// module.exports

