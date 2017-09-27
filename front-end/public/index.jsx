

class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state= {
  		addUser : ''
  	}
  }


  render() {
    return ( 
    	<div>
			<h2 My users</h2>
			<contact addUser= {this.state.addUser} />
			<form onSubmit= {this.handleSubmit} />
			 <input onChange={this.handleChange} value = {this.state.text} />
			 <button>{add}</button>
			</form>
		</div>;
		)
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      name: this.state.addUser,
    };
  }


}

ReactDOM.render(<App name="Jane" />, mountNode);