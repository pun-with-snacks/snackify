import React, { Component } from 'react';

class Entry extends Component {

    voteUp() {
        console.log('The votedUp button was clicked (entry.js)');
    }

    render() {
        return (
            <div className='entry'>
                <div>Creator</div>
                <img className='entryImg' src={this.props.src} />
                <div>Comment from creator</div>
                <button onClick={this.voteUp}>Thumbs up!</button>
            </div>
        );
    }
}

export default Entry;