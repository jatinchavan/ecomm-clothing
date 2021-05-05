import React from 'react';

import './CartDropDown.styless.scss';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { CartActionTypes } from '../../redux/cart/cart.types';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
           {
               cartItems.length ?
                cartItems.map(item => <CartItem key={item.id} item={item} />) :
                <span className='empty-message'>Your cart is empty</span>
           }
        </div>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch({type: CartActionTypes.TOGGLE_MINI_CART}); //shorthand for dispatch, need not declare mapDispatchToProps()
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)


const mapStateToProps = state => ({
    // cartItems : state.cart.cartItems
    cartItems : selectCartItems(state) //using selector
});

export default withRouter(connect(mapStateToProps)(CartDropDown));