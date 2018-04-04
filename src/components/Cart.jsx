import React from 'react';

import Item from './Item.jsx';


const Cart = props => {

  const cartItems = [];

  if (this.props.cart) {
    for (let i = 0; i < props.cart.length; i++) {
      cartItems.push(<Item key={ i } item={ props.cart[i] } />);
    }
  } else {
    cartItems.push(<div></div>)
  }

  return (
    <div id='cart'>
      { cartItems }
    </div>
  );
}


export default Cart;
