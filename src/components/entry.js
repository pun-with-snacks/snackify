import React, { Component } from 'react';

class Entry extends Component {

    render() {
        return (
            <div class='entry'>
                <div>Creator</div>
                <img class='entryImg' src={this.props.src} />
                <div>Comment from creator</div>
                <button>Thumbs up!</button>
            </div>
        );
    }
}

export default Entry;