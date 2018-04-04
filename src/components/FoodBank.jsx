import React, { Component } from 'react';

import Item from './Item.jsx';


const FoodBank = props => {

  const bankItems = [];

  if (this.props.bank) {
    for (let i = 0; i < this.props.bank.length; i++) {
      cartItems.push(<Item key={ i } item={ this.props.bank[i] } />);
    }
  } else bankItems.push(<div></div>)


  return (
    <div id='bank'>
      { bankItems }
    </div>
  );
}


export default FoodBank;
