import React from 'react' ;
import ReactDOM from 'react-dom' ;


class App extends React.Component {
	 constructor () {
	 	super();
	 }
	 getUsers () {
	 	$.ajax({
	 		url : '127.0.0.1:8888/users' , 
	 		type : 'GET',
	 		success : function(users) {
	 			for (var user of users) {
	 				<userEntity user={user}/>
	 			}
	 		},
	 		error : function (err) {
	 			console.log('error fetching users :' , err.message)
	 		}
	 	})
	 }
	 poster () {
	 	var obj = {
	 		name : $('#name').val(),
	 		email : $('#email').val()
	 	};
	 	$.ajax({
	 		url : '127.0.0.1:8888/users' , 
	 		type : 'POST',
	 		data :  obj,
	 		success : function(users) {
	 			console.log('user posted');
	 		},
	 		error : function (err) {
	 			console.log('error posting users :' , err.message)
	 		}
	 	})
	 }
	 byID () {
	 	var obj = {
	 		id : $('#ID').val(),
	 	};
	 	$.ajax({
	 		url : '127.0.0.1:8888/api/users' , 
	 		type : 'GET',
	 		data :  obj,
	 		success : function(user) {
	 			console.log('user found');
	 			<userEntity user={user}/>
	 		},
	 		error : function (err) {
	 			console.log('error getting user :' , err.message)
	 		}
	 	})
	 }
	 render () {
		return (
			<div>
			  <button onClick={getUsers}>click to get all users</button>
			  <hr/>
			  <inpute type="text" id="name"/>
			  <inpute type="text" id="email"/>
			  <button type="submit" onClick={poster}>click to submit</button>
			  <hr />
			  <inpute type="text" id="ID" placeholder="search by id" />
			  <button type="submit" onClick={poster}>click to search</button>
			</div>
			)
	}
}


var userEntity = react.createClass ({
	render : function (props) {
		return (
			<p> {props.user.name} </p> 
			<p> {props.user.email} </p> 
			)
	}
})


ReactDOM.render(<App /> , document.getElementById('app'))