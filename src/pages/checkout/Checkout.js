import React from 'react';

import './Checkout.styles.scss';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckOutItem from '../../components/checkout-item/CheckOutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

const Checkout = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => (
                <CheckOutItem key={item.id} cartItem={item} />
            ))
        }
        <div className='total'>
            <span>Total: </span>${totalPrice}
        </div>
        <div className='test-warning'>
            <i>*Please use the following test credit card for payments*</i>
            <br />
            4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
        </div>
        <StripeButton price={totalPrice} />
    </div>
);

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state),
        totalPrice : selectCartTotalPrice(state)
    }
}
export default connect(mapStateToProps)(Checkout);

