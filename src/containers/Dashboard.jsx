import React, { Component } from 'react';

import Cart from './Cart.jsx';
import FoodBank from './FoodBank.jsx';
import SubmissionForm from './SubmissionForm.jsx';

class Dashboard extends Component {

  constructor (props) {
    super(props);
    this.state = {
      budget: 600.00,
      cart: [
        {
          foodItem_id: 0,
          foodName: 'Milk',
          imgUrl: '',
          price: 3.50,
          comment: 'we need milk... like every week'
        },
        {
          foodItem_id: 0,
          foodName: 'Honey Nut Cheerios',
          imgUrl: '',
          price: 5.00,
          comment: 'know what would go great with milk?'
        }
      ],
      bank: [
        {

        },
        {

        }
      ],
    };
  };

  render () {
    return (
      <div>
        <Cart cart={ this.state.cart } budget={ this.state.budget } />
        <FoodBank bank={ this.state.bank } budget={ this.state.budget } />
        {/* <SubmissionForm gitHandle={ this.state.gitHandle } /> */}
      </div>
    );
  };

}
