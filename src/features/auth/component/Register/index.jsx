import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import './style.scss'
import { register } from '../../userSLice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userApi from '../../../../api/userApi';
Register.propTypes = {

};

function Register(props) {
    const { close } = props
    const dispatch = useDispatch()
    const submitFc = async (data) => {
        try {
            data.username = data.email
            delete data.passwordRepeat
            const action = register(data)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            console.log(user)
            // console.log(data)
            // const newData=await userApi.register(data)
            // console.log(newData)
        } catch (error) {
            console.log('gaploi', error)
            alert(error)
        }


    }
    return (
        <div className='register-box'>
            <div className="regiter__over-play"></div>
            <div className="register__form">
                <RegisterForm close={close} submitFc={submitFc} />
                <div onClick={close} className="register__btn-close"><i className="fal fa-times-circle"></i></div>
            </div>
        </div>
    );
}

export default Register;