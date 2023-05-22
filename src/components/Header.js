import React from 'react';
import './_Components.css';
import { authServices } from '../_utils/AuthServices';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const userStore = useSelector(state => state.User)
    const navigate = useNavigate();
    const logout = () => {
        authServices.logout();
        navigate('/');
    }
    const displayLogout = () => {
        if(authServices.isLogged()){
            return (
                <>
                <button className='nav-item'>
                    <span className='nav-item-icon material-symbols-outlined'>account_circle</span>
                    <span className="nav-item-text">{userStore.userName}</span>
                </button>
                <button onClick={logout} className='nav-item'>
                    <span className='nav-item-icon material-symbols-outlined'>logout</span>
                    <span className="nav-item-text">Sign Out</span>
                </button>
                </>
            )
        }
        else{
            return (
                <Link to='/sign-in' className='nav-item'>
                    <span className="nav-item-icon material-symbols-outlined">account_circle</span>
                    <span className='nav-item-text'>Sign In</span>
                </Link>
            )
        }
    }

    return (
        <header>
            <Link to='/'>
                <img className='logo' src="./img/argentBankLogo.png" alt="Logo Argent Bank"/>
            </Link>
            <div className='nav-items'>
                
                {displayLogout()}
            </div>
        </header>
    );
};

export default Header;