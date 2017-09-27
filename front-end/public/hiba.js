var myApp = angular.module('myApp',[]);
// i should handel get and post requests
// i will use $http
// i will provide path and try to communicate data to and from the backend
// when its a get request i want to append the data to the scope
// and render it to html

// in case of post request i want to append the data to the scope
// this way it will be entered
// to the database and rendered along with previous data

// in case the path is with a specific user 
myApp.controller('myApp', function($scope,$http) {
  // i assume response from server has data
	$http.get("api/users",function(response){
		$scope.users= response.data
	})
// i will go to html now and write code to render this
	// now i will work on what happens when user clicks 
	$scope.add= function(){
		$http.post('api/users', input.user)
	}
// maybe whatever i get from server is sorted there
// i mean when i want one user i will get one user from server
// when i want all users i will get all
// here in front end i only need to worry about organizing and rendering 
});