import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../../style.scss';
import { register } from '../../userSLice';
import RegisterForm from '../RegisterForm';
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
        <div className='auth-box'>
            <div className="auth__over-play"></div>
            <div className="auth__form">
                <RegisterForm submitFc={submitFc} />
                <div onClick={close} className="auth__btn-close"><i className="fal fa-times-circle"></i></div>
                <p onClick={()=>{close('login')}} className="move-to-diffirent-auth">
                    Have account?login
                </p>
            </div>
        </div>
    );
}

export default Register;