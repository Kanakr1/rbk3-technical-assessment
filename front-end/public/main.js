module.angular("users",['user'])
.controller('addUser',function($ctrl){
	$ctrl.addNewUser=function(){
		$.ajax({
			url:'http://localhost:3000/',
			method:'POST',
			data-type:"html",
			success:function(data){
				$("#result").append(data);
			}
		})
	}

})

tepmlate:`
inter a new username and email to add to your DB <input type="text" name="newUser">   Email:      <input type="text" name="Email"> 
<input type="submit" ng-click="addNewUser()" name="search for user">
<div id=result></div>

`