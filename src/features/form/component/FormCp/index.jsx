import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../Component/inputField';
const schema = yup.object().shape({
    content: yup.string().max(5,'nhap du 5 ki tu').required('phai nhap noi dung'),
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

        <form onSubmit={form.handleSubmit(handlesubmit1)}>
            <InputField form={form} name='content' label='todo' form={form} />
        </form>
    );
}

export default FormCp;