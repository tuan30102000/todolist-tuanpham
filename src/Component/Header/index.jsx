import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../../features/auth/component/Login';
import Register from '../../features/auth/component/Register';
import './style.scss';

Header.propTypes = {

};

function Header(props) {
    const [authState, setauthState] = useState('none')
    const handleAuth = function (value='none') {
        setauthState(value)
    }
    return (
        <header className='header layout'>
            <div className="layout-box header-box">
                <a className='header__link logo'>Legacy</a>
                <div className="header__link-box">
                    <NavLink className='header__link' to='/todo' >Todo</NavLink>
                    <NavLink className='header__link' to='/data' >Data</NavLink>
                    <div onClick={() => { handleAuth('register') }} className='header__link'>
                        Register
                    </div>
                    <div onClick={() => { handleAuth('login') }} className='header__link'>
                        Login
                    </div>
                </div>
            </div>
            {authState === 'register' && <Register close={handleAuth} />}
            {authState === 'login' && <Login close={handleAuth} />}
        </header>
    );
}

export default Header;