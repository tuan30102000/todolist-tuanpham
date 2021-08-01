import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../../features/auth/component/Register';
import './style.scss';

Header.propTypes = {

};

function Header(props) {
    const [registerState, setregisterState] = useState(false)
    const handleRegister = function () {
        let newState =!registerState
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
            {registerState && <Register close={handleRegister} />}
        </header>
    );
}

export default Header;