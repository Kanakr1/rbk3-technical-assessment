var app = angular.module('MyApp')
.controller({'AppCtrl', ['$scop',function($scop){
	add:function(){
	$http({
  	method: 'GET',
  	url: '/user'
	}).then(function successCallback(response) {
    response.send(body)
    response.end()
  	}, function errorCallback(response) {
    response.send(404,err)
    response.end()
  });

	}
}]

})

