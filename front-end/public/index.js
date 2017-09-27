var $http = require("http")

class App extends React.Component{
	constructor(props){
		super(props)
	

	this.state = {
		user : ""
	}
}

handleChange(event){
	this.setState = {
		user :event.target.user
	}

	$.ajax({
		method : 'POST',
		url : "http://localhost:3000",
		data : this.state.user
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
		url : "News.aspx/GetNewsContent",//news API
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
		ADD USER : <input type = "text"  value = {this.state.user}. onChang = {this.handleChange}>
		VIEW USER <input type = "submit" value = {this.showUsers}>
		</div>
		)
}

}

ReactDOM.render(<App /> , document.getElementById("app"))