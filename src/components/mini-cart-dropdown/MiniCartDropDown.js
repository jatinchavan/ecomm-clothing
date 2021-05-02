import React from 'react';

import './MiniCartDropDown.styless.scss';
import CustomButton from '../custom-button/CustomButton';

const MiniCartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default MiniCartDropDown;