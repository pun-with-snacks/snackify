import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import Dashboard from './Dashboard.jsx';


class App extends Component {

  // NOTE: only keep track of user's state here
  constructor (props) {
    super(props)
    this.state = {
      currUser: {
        gitHandle: 'back2bas1cs',
        avatar: 'avatar'
      }
    };
  };

  changeUser () {

  }

  componentDidMount () {
      console.log(`componentDidMount fired!!! `);
      fetch('/test', {credentials: "same-origin"})
      .then(response => response.json())
      .then(myJson => {
				// console.log(myJson);
				this.setState(myJson);
				console.log(this.state + "<==== this.state");
      })
			.catch(err => console.log(err));

			// fetch('/cart', {credentials: "same-origin"})
			// .then(res => res.json())
			// .then(myJson => {
			// 	console.log(myJson);
			// 	this.setState({cart: myJson});
			// 	console.log(this.state);
			// })
  };

  render () {
    return (
      <div>
        <Header id='header' gitHandle={ this.currUser.gitHandle } avatar={ this.currUser.avatar } />
        <Dashboard gitHandle={ this.state.currUser.gitHandle } } />
      </div>
    );
  };
}

export default App;
