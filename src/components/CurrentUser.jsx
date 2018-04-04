import React, { Component } from 'react';

const CurrentUser = props => {

  return (
    <div id='currentUserDiv'>
       {/*this needs to pull in gitHub avatar */}
      <img id='currUserImg' src={ props.avatar } />
      <div id='currGithubHandle' >{ props.gitHandle }</div>
    </div>
  );

};


export default CurrentUser;
