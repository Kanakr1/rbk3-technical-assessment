import React from 'react';
import ReactDOM from 'react-dom';
import user from 'user';
class App extends Component{
	constructor(){
		super(props)
	}
	render(){
		return (
			<div>
				<user name='username' type='txt'/>
				<div>{this.props.state.map(user => {this.props.item})}</div>
			</div>)
	}
}
//we need component to display user name and the second one to display array of users we added





React.render(<App/>,document.getElementById('app'));