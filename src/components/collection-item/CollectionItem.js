import React from 'react';

import './CollectionItem.styles.scss';
import CustomButton from '../custom-button/CustomButton';
import {connect} from 'react-redux';
import {CartActionTypes} from '../../redux/cart/cart.types';

// Displays each individual collection item on Collection Overview
const CollectonItem = ({item, addItem}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
            backgroundImage: `url(${item.imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className='name'>{item.name}</span>
            <span className='price'>${item.price}</span>
        </div>
        <CustomButton inverted onClick={(e) => {
            e.currentTarget.innerText = 'ADDED';
            return addItem(item)}}>
            ADD TO CART
        </CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch({type: CartActionTypes.ADD_ITEM, payload: item})
    }
};

export default connect(null, mapDispatchToProps)(CollectonItem);