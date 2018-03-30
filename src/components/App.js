import React, {Component} from 'react';

class App extends Component{


    render(){
        return (
            <div>
							<button><a href="http://localhost:3000/auth/github"> Log In Github</a></button>
							<button><a href="http://localhost:3000/auth/google"> Log In Google+</a></button>
						</div>
        );
    }
}

export default App;

