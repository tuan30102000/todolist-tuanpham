import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from '../../features/auth/component/Login';
import Register from '../../features/auth/component/Register';
import { logout } from '../../features/auth/userSLice';
import './style.scss';

Header.propTypes = {

};

function Header(props) {
    const [authState, setauthState] = useState('none')
    const userInfo = useSelector(state => state.user.current)
    const dispatch = useDispatch()
    const handleLogout=()=>{
        dispatch(logout())
    }

    let stateLogin = !userInfo.id
    const handleAuth = function (value = 'none') {
        setauthState(value)
    }
    return (
        <header className='header layout'>
            <div className="layout-box header-box">
                <NavLink to='/' className='header__link logo'>Legacy</NavLink>
                <div className="header__link-box">
                    <NavLink className='header__link' to='/todo' >Todo</NavLink>
                    {/* <NavLink className='header__link' to='/data' >Data</NavLink> */}
                    <NavLink className='header__link' to='/products' >Product</NavLink>
                    {stateLogin && (<>
                        <div onClick={() => { handleAuth('register') }} className='header__link'>
                            Register
                        </div>
                        <div onClick={() => { handleAuth('login') }} className='header__link'>
                            Login
                        </div>
                    </>)}

                    {!stateLogin && (
                        <>
                            <div onClick={() => { handleLogout()}} className='header__link'>
                                Logout
                            </div>
                            <div className='header__info'>
                                <p>{userInfo.fullName}</p>
                                <AccountCircle className='header__avt' />
                            </div>

                        </>)}

                </div>
            </div>
            {stateLogin && (<>
                {authState === 'register' && <Register close={handleAuth} />}
                {authState === 'login' && <Login close={handleAuth} />}
            </>)}



        </header>
    );
}

export default Header;