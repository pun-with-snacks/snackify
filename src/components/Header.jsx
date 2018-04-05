import React, { Component } from 'react';

import CurrentUser from './CurrentUser.jsx';


const Header = props => {

  return (
    <header>
      <div id='title'>CS SNACK TIME</div>
      <ul>
      {/* need link href to logout route!!! */}
      {/* Need to build user component */}
      {/* {console.log('Header props:', props)} */}
        <li><a href="#">{ props.gitHandle }</a></li>
        <li><CurrentUser gitHandle={ props.gitHandle } avatar={ props.avatar } /></li>
      </ul>
    </header>
  );


}


export default Header;
