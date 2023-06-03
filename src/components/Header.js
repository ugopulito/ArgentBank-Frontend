import React from 'react';
import './_Components.css';
import { authServices } from '../_utils/AuthServices';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth, resetUser } from '../redux';

const Header = () => {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.User)
    const location = useLocation();
    const navigate = useNavigate();
    const logout = () => {
        authServices.logout();
        dispatch(resetUser());
        dispatch(resetAuth());
        navigate('/sign-in')
    }
    const displayLoggedHeader = () => {
        if(authServices.isLogged()){
            return (
                <>
                <button onClick={() => navigate('/user')} className='nav-item'>
                    <span className='nav-item-icon material-symbols-outlined'>account_circle</span>
                    <span className="nav-item-text">{location.pathname === '/user' ? userStore.userName : 'My account'}</span>
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
                {displayLoggedHeader()}
            </div>
        </header>
    );
};

export default Header;