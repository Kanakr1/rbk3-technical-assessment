class App extends React.Component {
  			constructor(props) {
    			super(props);
  			}
  			render() {
    			return (
      				<div>
      					<h1>Hello There!</h1>
      					<Getusers />
      				</div>
    			);
  			}
		}

		class Getusers extends React.Component {
  			constructor(props) {
    			super(props)
    			this.users = {}
  			}

  			getAll () {
  				$.ajax({
  				type: 'GET',
  				dataType: 'json',
  				async: false,
  				url: '/users',
  				success: function(data) {
  				console.log(data)
  				this.users = data
  				console.log(this.users)
  			}
  			})
  			}

  			render() {
    			return (
    			<div>
    				<h3>Would you like to see my users ?</h3>
    				<h4> Just Press this Button ==> </h4> <button name = "GetAll" onClick = {this.getAll} >Get Users</button>
    				<ul>
    					{_.map(this.users, function(ele){
    						<li>ele</li>
    					})}
    				</ul>
    			</div>
    			)
    		}
    	}

ReactDOM.render(<App />, document.getElementById('app'));