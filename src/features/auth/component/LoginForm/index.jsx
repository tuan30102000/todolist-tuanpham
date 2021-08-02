import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../../../../Component/FormGroup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { LinearProgress } from '@material-ui/core';

const schema = yup.object().shape({
    username: yup.string().required('vui longf nhap email').email(),
    password: yup.string().required('vui long nhap password').min(6, 'vui long nhap du 6 ki tu'),
});

LoginForm.propTypes = {
    submitFc: PropTypes.func.isRequired,
};

function LoginForm(props) {
    const { submitFc } = props
    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })
    const { handleSubmit, formState } = form
    const sunbmit=(value)=>{

        submitFc(value)
    }
    return (
        <form onSubmit={handleSubmit(sunbmit)}  className='form'>
            {formState.isSubmitting && <LinearProgress color="secondary" className='progress' />}
            <p className='auth__title'>Đăng Nhập</p>
            <FormGroup formName='login' form={form} name='username' />
            <FormGroup formName='login' form={form} type='password' name='password' />
            <button className="auth__submit-btn">Đăng nhập</button>
        </form>
    );
}

export default LoginForm;