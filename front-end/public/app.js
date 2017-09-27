anguler.module("app",[])
.controller("creatUser", function creatUser(){


	this.save = function ($scope){
		this.data = [] ;

		$http({

			method:'GET',
			url:'http://localhost:3000/api/users',
			data:data
		}).then(function seccessCallback(response){
			$scope.data= response.data
		},
		function errorCallback(response){
			console.error("error in callback")
		});

		$http({

			method:'POST',
			url:'http://localhost:3000/api/users',
			data:{name :$(#name).val() , email: $(#email).val()}
		}).then(function seccessCallback(response){
			$scope.data= response.data	
		},
		function errorCallback(response){
			console.error("error in callback")

		});

		$http({

			method:'GET',
			url:'http://localhost:3000/api/users/:id'
			data:{name , email}
		}).then(function seccessCallback(response,id){
			// var query= 'select * from data where id = id'
			
			   $scope.data= response.data	
			
			
		},
		function errorCallback(response){
			console.error("error in callback")
		});

	}


});

	// $ajax.get({
		// 	url : 'http://localhost:3000/api/users',
		// 	method : 'GET',
		// 	data : data
		// });
		// $ajax.post({
        //url : 'http://localhost:3000/api/users',
		// 	method : 'POST',
	     // data:{name :$(#name).val() , email: $(#email).val()}
  //   	});

		// $ajax.get({
        //url : 'http://localhost:3000/api/users/:id',
		// 	method : 'GET',
		// 	data : data


		// });

