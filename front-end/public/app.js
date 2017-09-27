module.angular("users",[])
.controller('addUser',function($ctrl){
	$ctrl.addNewUser=function(){
		$.ajax({
			url:'http://localhost:3000/',
			method:'POST',
			data-type:"html",
			
		})
	}

})

tepmlate:`
inter a new username and email to add to your DB <input type="text" name="newUser">   Email:      <input type="text" name="Email"> 
<input type="submit" ng-click="addNewUser()" name="search for user">
<div id=result></div>

`