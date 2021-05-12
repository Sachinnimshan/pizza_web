import React from 'react';
import './Header.css';
import {GiShoppingCart} from 'react-icons/gi';
import {ImUser} from 'react-icons/im';
import {useDispatch,useSelector} from 'react-redux';

import {Link} from 'react-router-dom';
import {Dropdown, Button, ButtonGroup} from 'react-bootstrap';
import {signout} from '../../store/auth/authActions';
import {Badge} from 'react-bootstrap';



function Header() {
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);
    const{userInfo, loading, error}= auth;
    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart;

    


    const signoutHandler=()=>{
        dispatch(signout());
    }
    return (
        <div className='header-container'>
            <div className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src='/Images/logo.png' className='logo-img'/></Link>
                </div>
                <div className='nav-menu'>
                    <div className='nav-item'><Link to='/' className='nav-links'>PIZZA</Link></div>
                    <div className='nav-item'><Link to='/' className='nav-links'>APPETIZERS & OTHERS</Link></div>
                    <div className='nav-item'><Link to='/' className='nav-links'>PROMOS</Link></div>
                </div>
            </div>
            <div className='login-cart-container'>
                <div className='sign-register-container'>
                {(userInfo) ? 
                
               ( <button className='btn-user'>{userInfo.Name}</button> )
                :
                (<button className='btn-user'>
                    <Link to='/login' className='sign-register-link'>Sign in / Register</Link>
                </button>)}
                </div>
                <div className='cart-icon-container'>
                    <Link to='/cart'><Badge variant='success'><GiShoppingCart className='cart-icon'/>
                    <span>{cartItems.length}</span>
                    </Badge></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
