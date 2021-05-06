import React from 'react';

import './Header.styles.scss';
import animatedLogo from '../../assets/ecomm-animated.gif'
import {auth} from '../../firebase/firebase.utils';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

//{currentUser} = props.currentUser
const Header = ({currentUser, HiddenMiniCart}) => (
    <div className='header'>
        <NavLink to="/" className='logo-container'>
            <img src={animatedLogo} alt='logo'/>
        </NavLink>
        <div className='options'>
            <NavLink className='options' to='/shop'> SHOP </NavLink>
            <NavLink className='options' to='/contact'> CONTACT </NavLink>
            {
                currentUser ? // show based on if user is loggd in or not. 
                <div className='options' onClick={() => auth.signOut()}> SIGN OUT </div>
                : 
                <NavLink className='options' to='/signin'> SIGN IN </NavLink>
            }
            <CartIcon />
        </div>
        {HiddenMiniCart ? null : <CartDropDown />}
    </div>
);



const mapStatesToProp = (state) => {
    return {
        // used selectors with Reselect
        currentUser: selectCurrentUser(state),
        HiddenMiniCart : selectCartHidden(state)
    }
};


export default connect(mapStatesToProp)(Header);