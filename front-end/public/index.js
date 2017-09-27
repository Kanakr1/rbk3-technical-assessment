class App extends React.Component{
	constructor(props){
		super(props)
	

	this.state = {
		userId : ""
	}
}

handleChange(event){
	this.setState = {
		userId :event.target.userId
	}

	$.ajax({
		method : 'POST',
		url : "http://localhost:3000/api/users",
		data : this.state.user
			success : function(){
			console.log("SUCESS !!!")
		},
		error: function(){
			console.log("ERROR !!!")
		}

		})
}

getUser(){
	$.ajax({
		method : 'GET',
		url : "http://localhost:3000/api/users/:id",
		data : this.state.userId
			success : function(){
			console.log("SUCESS !!!")
		},
		error: function(){
			console.log("ERROR !!!")
		}

		})
}

showUsers(callback) {
 $.ajax({
		method : 'GET',
		url : "http://localhost:3000/api/users",
		contentType: "application/json",
		success : function(data){
			callback(data)
			console.log("SUCESS !!!")
		},
		error: function(){
			console.log("ERROR !!!")
		}

		})
		
}

render () {
	return (
		<div>
		ADD USER ID : <input type = "text"  value = {this.state.user} onChange = {this.handleChange}>
		VIEW USER 	: <input type = "submit" value = {this.showUsers}>

		</div>
		)
}

}

ReactDOM.render(<App /> , document.getElementById("app"))