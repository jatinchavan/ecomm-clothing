import React from 'react';

import './CheckOutItem.styles.scss';
import {CartActionTypes} from '../../redux/cart/cart.types';
import {connect} from 'react-redux';

const CheckOutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item'/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>
                {cartItem.quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>${cartItem.price}</span>
        <div className='clear-button' onClick={() => clearItem(cartItem.id)}>&#10005;</div>
    </div>
)};

const mapPropsToDispatch = dispatch => {
    return {
        removeItem: item => dispatch({type: CartActionTypes.REMOVE_ITEM, payload: item}),
        addItem: item => dispatch({type: CartActionTypes.ADD_ITEM, payload: item}),
        clearItem: id => dispatch({type: CartActionTypes.CLEAR_ITEM_FROM_CART, removeID: id})
    }
}

export default connect(null, mapPropsToDispatch)(CheckOutItem);