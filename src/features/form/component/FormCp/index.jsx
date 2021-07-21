import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Component/inputField';
import { useForm } from 'react-hook-form';

FormCp.propTypes = {

};

function FormCp(props) {
    const form =useForm({
        defaultValues:{
            content:''
        }
    })
    const handlesubmit1=function(value){
     console.log('data is',value)       
    }
    return (
       
        <form  onSubmit={form.handleSubmit(handlesubmit1)}>
            <InputField form={form} name='content' label='todo' form={form}/>
        </form>
    );
}

export default FormCp;