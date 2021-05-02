import React from 'react';

import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MiniCartIcon from '../mini-cart-icon/MiniCart-icon';
import MiniCartDropDown from '../mini-cart-dropdown/MiniCartDropDown';

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
            <MiniCartIcon />
        </div>
        {HiddenMiniCart ? null : <MiniCartDropDown />}
    </div>
);

const mapStatesToProp = (state) => {
    return {
        // state.user and state.cart are the reducers slice defined in index.js 
        currentUser: state.user.currentUser,
        HiddenMiniCart : state.cart.hidden
    }
};


export default connect(mapStatesToProp)(Header);