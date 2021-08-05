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
    const { enqueueSnackbar,closeSnackbar } = useSnackbar()
    const { close } = props
    const dispatch = useDispatch()
    const submitFc = async (data) => {
        try {
            data.identifier = data.username
            delete data.username
            const action = login(data)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            close()
            enqueueSnackbar('Đăng nhập thành công',{variant:'success'})

            setTimeout(closeSnackbar,5000)

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
                <p onClick={()=>{close('register')}} className="move-to-diffirent-auth">
                    Have account?register
                </p>
            </div>
        </div>
    );
}

export default Login;