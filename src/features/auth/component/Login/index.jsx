import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../../style.scss';
import { login } from '../../userSLice';
import LoginForm from '../LoginForm';
Login.propTypes = {

};

function Login(props) {
    const { enqueueSnackbar } = useSnackbar()
    const { close } = props
    const dispatch = useDispatch()
    const submitFc = async (data) => {
        try {
            data.identifier = data.username
            delete data.username
            console.log(data)
            const action = login
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            close()
            enqueueSnackbar('Đăng nhập thành công',{variant:'success'})
        } catch (error) {
            console.log('Loi dang nhap', error)
            alert('Đăng nhập không thành công')
        }
    }
    return (
        <div className='auth-box'>
            <div className="auth__over-play"></div>
            <div className="auth__form">
                <LoginForm submitFc={submitFc} />
                <div onClick={close} className="auth__btn-close"><i className="fal fa-times-circle"></i></div>
            </div>
        </div>
    );
}

export default Login;