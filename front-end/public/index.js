
angular.module("myApp",[])
.component('app',{
	// console.log('hi')

})
.component('addUser',{
	handleClick: function(){
	$.ajax({
		url:'http://localhost:3000/users',
		method:'POST',
		data:{name:this.name,email:this.email},
		success:function(data){
			console.log(data);
		}
		
	})
	}

})
.component('viewUser',{
	view:function(){
		$.ajax({
			url:'http://localhost:3000/users',
			method:'GET',
			success:function(data){
              return `<div>{{data}}</div>`
			}
		})
	
})
