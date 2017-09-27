var myApp = angular.module('myApp',[]);
// i should handel get and post requests
// i will use $http
// i will provide path and try to communicate data to and from the backend
// when its a get request i want to append the data to the scope
// and render it to html

// in case of post request i want to append the data to the scope
// this way it will be entered
// to the database and rendered along with previous data

// in case the pathe is with a specific user 
myApp.controller('myApp', function($scope,$http) {
  // i assume response from server has data
	$http.get("api/users",function(response){
		$scope.users= response.data
	})
// i will go to html now and write code to render this


});