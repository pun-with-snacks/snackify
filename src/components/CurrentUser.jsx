import React, { Component } from 'react';


const CurrentUser = props => {

  render () {
    return (
      <div id='currentUserDiv'>
         {/*this needs to pull in gitHub avatar */}
        <img id='currUserImg' src={ this.props.currUser.avatar } />
        <div id='currGithubHandle' >{ this.props.currUser.gitHandle }</div>
      </div>
    );
  };

};


export default CurrentUser;
