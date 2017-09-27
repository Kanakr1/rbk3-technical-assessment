import react from 'react';
import reactdoc from 'react-Dom';
import $ from 'jquery'

class Myapp extends React.component{
	constructor(props){
		super(props);
		this.state={
			users=``

		}
	} 
  onchange(e){
  	this.setstate={
  		id:``
  		name:``
  		email:``
  	}

  }

render(){
	return (
		<div>Add User:
		Enter id 
		<input name= 'id' onchange= {this.props.users.id}> <input>
		Enter name
		<input name= 'name' onchange= {this.props.users.name}> <input>
		Enter email
		<input name= 'email' onchange= {this.props.users.email}> <input>
		<button name ='submet' onClick><button>

		<div>
		);
}

}

export default Myapp