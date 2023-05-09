import React from 'react';
import './_Components.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <Link to='/'>
                <img className='logo' src="./img/argentBankLogo.png" alt="Logo Argent Bank"/>
            </Link>
            <Link to='/sign-in' className='nav-item'>
                <span className="nav-item-icon material-symbols-outlined">account_circle</span>
                <span className='nav-item-text'>Sign In</span>
            </Link>
        </header>
    );
};

export default Header;