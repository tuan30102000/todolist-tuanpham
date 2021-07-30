import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss'
import RegisterForm from '../../features/auth/component/RegisterForm';

Header.propTypes = {

};

function Header(props) {
    const [registerState, setregisterState] = useState(false)
    const handleRegister = function () {
        let newState = registerState ? false : true
        setregisterState(newState)
    }
    return (
        <header className='header layout'>
            <div className="layout-box header-box">
                <a className='header__link logo'>Legacy</a>
                <div className="header__link-box">
                    <NavLink className='header__link' to='/todo' >Todo</NavLink>
                    <NavLink className='header__link' to='/data' >Data</NavLink>
                    <div onClick={handleRegister} className='header__link'>
                        Register
                    </div>
                </div>
            </div>
            {registerState && <RegisterForm />}
        </header>
    );
}

export default Header;