var app = angular.module('app', [])

.controller('addUser', ['$scope', function($scope){ 
	$scope.submit = function(){
		var data = $.param({
			user: JSON.stringify({
				name: $scope.name,
				email: $scope.email
			})
		});

	$http({
	  method: 'GET',
	  url: '/someUrl'
	  })
		.then(function () {
			// in this function we will return all users.
	  	})

	$http.post('/api/users', data).success(function(data, status){
		console.log('data posted!')
	});

	$http({
	  method: 'GET',
	  url: '/api/users/:id'
	  })
		.then(function () {
			// here we're supposed to return only one user.
	  	})

	}

}])