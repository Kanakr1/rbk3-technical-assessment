angular.module('alaa',[])
 .component('app',{
 	controller : function cont() {
 		this.addClick = function (){
 			var x = document.getElementById("add").value;
 		    $.ajax({
 		      url: '127.0.0.1:3000/api/users',
 			  type : 'Post',
 			  data : {data : x},
 			  dataType : 'applecation/json',
 			  success : function(){
 				if(data.result){
 					this.names = data.result;
 				}
 			}
  		  })
  		
 		}

 		this.idClick = function (){
 			var x = document.getElementById("id").value;
 		    $.ajax({
 		      url: '127.0.0.1:3000//api/users/id ',
 			  type : 'GET',
 			  data : {data : x},
 			  dataType : 'applecation/json',
 			  success : function(){
 				if(data.result){
 					this.ids = data.result;
 				}
 			}
  		  })
  		
 		}

 		this.showBut = function(){
 			
 		    $.ajax({
 		      url: '127.0.0.1:3000/api/users',
 			  type : 'GET',
 			  
 			  dataType : 'applecation/json',
 			  success : function(){
 				if(data.result){
 					this.names = data.result;
 				}
 			}
  		  })
  		
 		}
 		

 		
 	},
 	
 	template : `<input id = 'add' type = 'text'/> <button ng-click="$ctrl.addClick()" > add </button>
 				 <button ng-click="$ctrl.showBut()" > show </button><br>
 				 <input id = 'id' type = 'text'/> <button ng-click="$ctrl.idClick()" > search </button>
 				<p ng-repeat =' user in $ctrl.names '> {{user}} </p>
 				<p ng-repeat ='id in $ctrl.ids' > {{id}} </p>

 	 `
 })