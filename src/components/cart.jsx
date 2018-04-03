import React, { Component } from 'react';
import Entry from './entry.jsx';

class Cart extends Component {


	render () {
		// temp. images to test with
		// let tempPics = [
		//     'https://goo.gl/WBG2F4',
		//     'https://goo.gl/34b24F',
		//     'https://goo.gl/ay2Qtc',
		//     'https://goo.gl/3uS5nn',
		//     'https://goo.gl/qyCFzs'
		// ];
		const display = [];
		if (this.props.cart) {
			for (let i = 0; i < this.props.cart.length; i++) {
				display.push(<Entry key={ i } userPost={ this.props.cart[i] } />);
			}
		} else {
			display.push(<div></div>)
		}
		// let images = tempPics.map((e, i) => <Entry src={e} key={i} />);
		return (
			<div id='cart'>
				{ display }
			</div>
		);
	}
}

export default Cart;
