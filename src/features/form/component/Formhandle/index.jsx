import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputElm from '../Input';

FormHandle.propTypes = {

};

function FormHandle(props) {
    const form = useForm({
        defaultValues: {
            name: '',
            age: ''
        }
    })
    const handlesb=function(data) {
        console.log(data)
    }
    const { register, handleSubmit } =form

    return (
        <form onSubmit={handleSubmit(handlesb)}>
            <InputElm register={register} namePr='name' form={form} contentLabel='name'/>
            <InputElm register={register} namePr='age' form={form} contentLabel='age'/>
            <input type='submit'/>
        </form>
    );
}

export default FormHandle;