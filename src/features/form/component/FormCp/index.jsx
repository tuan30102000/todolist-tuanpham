import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Component/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object().shape({
    content: yup.string().required('phai nhap noi dung'),
});

FormCp.propTypes = {

};

function FormCp(props) {
    const form = useForm({
        defaultValues: {
            content: ''
        },
        resolver: yupResolver(schema)
    })
    const handlesubmit1 = function (value) {

        console.log('data is', value)
    }
    return (

        <form onSubmit={
            form.handleSubmit(handlesubmit1)


        }>
            <InputField form={form} name='content' label='todo' form={form} />
        </form>
    );
}

export default FormCp;