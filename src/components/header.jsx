import React, { Component } from 'react';

import CurrentUser from './CurrentUser.jsx';


const Header = props => {

  render () {
    return (
      <header>
        <div id='title'>CS SNACK TIME</div>
        <ul>
        {/* need link href to logout route!!! */}
        {/* Need to build user component */}
          <li><a href="#">LG</a></li>
          <li><CurrentUser currUser={ this.props.currUser } }/></li>
        </ul>
      </header>
    );
  };

}


export default Header;
