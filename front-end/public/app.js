angular.module("myApp" , []) 
.component("users",{
	template : `
	<input ng-model="$ctrl.user-name"/>

	<button ng-click="on.add()">add User Name</button>
	{{$ctrl.user-name}}
	<div ng-repeat=user in users>{{user}}</div>`

	controller :('myCtrl',function add(user) {
		db.json.users.push(user)

	})
}
