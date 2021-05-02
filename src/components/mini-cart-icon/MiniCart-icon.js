import React from 'react';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import './MiniCart.styles.scss';
import { CartActionTypes } from '../../redux/cart/cart.types';
import { connect } from 'react-redux';

const MiniCartIcon = (props) => (
    <div className='mini-cart-icon' onClick={props.toggleCartHandler}>
        <ShoppingBag className='shopping-bag' />
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHandler: () => dispatch({type: CartActionTypes.TOGGLE_MINI_CART})
    }
};

export default connect(null, mapDispatchToProps)(MiniCartIcon);