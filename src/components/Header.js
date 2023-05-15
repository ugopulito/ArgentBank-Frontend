import React from 'react';
import './_Components.css';
import { authServices } from '../_utils/AuthServices';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const logoutUser = () => {
        authServices.logout();
        console.log('logout')
    }
    const displayLogout = () => {
        if(location.pathname === '/user'){
            return (
                <button onClick={logoutUser} className='nav-item'>
                    <span className='nav-item-icon material-symbols-outlined'>logout</span>
                    <span className="nav-item-text">Sign Out</span>
                </button>
            )
        }
    }

    return (
        <header>
            <Link to='/'>
                <img className='logo' src="./img/argentBankLogo.png" alt="Logo Argent Bank"/>
            </Link>
            <div className='nav-items'>
                <Link to='/sign-in' className='nav-item'>
                    <span className="nav-item-icon material-symbols-outlined">account_circle</span>
                    <span className='nav-item-text'>Sign In</span>
                </Link>
                {displayLogout()}
            </div>
        </header>
    );
};

export default Header;