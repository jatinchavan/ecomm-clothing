import React from 'react';

import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

//{currentUser} = props.currentUser
const Header = ({currentUser, HiddenMiniCart}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'> SHOP </Link>
            <Link className='options' to='/contact'> CONTACT </Link>
            {
                currentUser ? // show based on if user is loggd in or not. 
                <div className='options' onClick={() => auth.signOut()}> SIGN OUT </div>
                : 
                <Link className='options' to='/signin'> SIGN IN </Link>
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