import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';


class App extends Component {

  // NOTE: only keep track of user's state here
  constructor () {
    this.state = {
      currUser: {
        gitHandle: 'back2bas1cs',
        avatar: 'avatar'
      }
    };
  };

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
        <Header id='header' currUser={ this.currUser } />
        <Dashboard gitHandle={ this.state.currUser.gitHandle } cart={ this.state.cart } bank={ this.state.bank } budget={ this.state.budget } />
      </div>
    );
  };
}

export default App;
