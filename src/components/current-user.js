import React, { Component } from 'react';

class CurrentUser extends Component {

    render() {
        return (
            <div id='currentUserDiv'>
                 {/*this needs to pull in getHub avatar */}
                {/* and user name */}
                <img id='currentUserImage' src='https://goo.gl/N25pkS' />
                <div id='currentUserName' >username</div>
            </div>
        );
    }
}

export default CurrentUser