import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../../../../Component/FormGroup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { LinearProgress } from '@material-ui/core';

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
    const { handleSubmit, formState } = form
    const sunbmit =async (value) => {

        submitFc(value)
        await submitFc(value)
        form.reset()
    }
    return (
        <form onSubmit={handleSubmit(sunbmit)} className='form'>
            {formState.isSubmitting && <LinearProgress color="secondary" className='progress' />}
            <p className='auth__title'>Dang ki</p>
            <FormGroup formName='register' form={form} name='fullName' />
            <FormGroup formName='register' form={form} name='email' />
            <FormGroup formName='register' form={form} type='password' name='password' />
            <FormGroup formName='register' form={form} type='password' name='passwordRepeat' />
            <button className="auth__submit-btn">Dang ki</button>
        </form>
    );
}

export default RegisterForm;