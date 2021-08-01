import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../../../../Component/FormGroup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './style.scss'

const schema = yup.object().shape({
    fullName: yup.string().required('vuilong nhap ten').test('check name', 'vui long nhap ho ten day du', (value) => value.split(' ').length >= 2),
    email: yup.string().required('vui longf nhap email').email(),
    password: yup.string().required('vui long nhap password').min(6, 'vui long nhap du 6 ki tu'),
    passwordRepeat: yup.string().required('vui long nhap lai password').min(6, 'vui long nhap du 6 ki tu').oneOf([yup.ref('password')], 'vui long nhap chinh xac password'),
});

RegisterForm.propTypes = {
    submitFc: PropTypes.func.isRequired,
};

function RegisterForm(props) {
    const { submitFc } = props
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            passwordRepeat: '',
        },
        resolver: yupResolver(schema)
    })
    const { handleSubmit } = form
    return (
        <form onSubmit={handleSubmit(submitFc)} className='form'>
            <p className='register__title'>Dang ki</p>
            <FormGroup formName='register' form={form} name='fullName' />
            <FormGroup formName='register' form={form} name='email' />
            <FormGroup formName='register' form={form} type='password' name='password' />
            <FormGroup formName='register' form={form} type='password' name='passwordRepeat' />
            <button className="register__submit-btn">Dang ki</button>
        </form>
    );
}

export default RegisterForm;