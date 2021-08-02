import { LinearProgress } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSLice';
import RegisterForm from '../RegisterForm';
import './style.scss';
Register.propTypes = {

};

function Register(props) {
    const { enqueueSnackbar } = useSnackbar()
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
            close()
            enqueueSnackbar('dang ki thanh cong',{variant:'success'})
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
                <RegisterForm submitFc={submitFc} />
                <div onClick={close} className="register__btn-close"><i className="fal fa-times-circle"></i></div>
            </div>
        </div>
    );
}

export default Register;