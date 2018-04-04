import React, { Component } from 'react';


class Item extends Component {


  voteUp () {
		// fetch('/voteup')
		// .then(res => res.json())
		// .then(json => alert('you voted up'))

    // NOTE: if user votes for item, increment item's voteCount
    this.voteCount++
		alert('You Voted UP this snack - Functionality Coming soon...');
  }

  componentShouldUpdate () {
    // NOTE: put functionality for which items to "re-load" here (only want items that are new)
  }

  render () {
    return (
      <div className='item'>
        <div>{ this.props.userPost.userName }</div>
        <img className='itemImg' src={ this.props.item.imgUrl } />
        <div className="comment">{ this.props.item.comment }</div>
        <button onClick={ this.voteUp }>Thumbs up!</button>
        <div className="votes">{ this.props.item.votes }</div>
      </div>
    );
  };
}


export default Item;
