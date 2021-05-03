import React from 'react';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import './MiniCart.styles.scss';
import { CartActionTypes } from '../../redux/cart/cart.types';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const MiniCartIcon = (props) => (
    <div className='mini-cart-icon' onClick={props.toggleCartHandler}>
        <ShoppingBag className='shopping-bag' />
        <span className='item-count'>{props.totalCount} </span>
    </div>
);

const mapStateToProps = state => {
    return {
        // totalCount: state.cart.cartItems.reduce((accumulatedSum, item) => accumulatedSum + item.quantity, 0)
        totalCount: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHandler: () => dispatch({type: CartActionTypes.TOGGLE_MINI_CART})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartIcon);