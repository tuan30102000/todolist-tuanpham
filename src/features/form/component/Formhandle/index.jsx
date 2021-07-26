import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputElm from '../Input';

FormHandle.propTypes = {

};

function FormHandle(props) {
    const InputValidateInfo = [
        {
            name: 'name',
            label: 'name',
            validate: {
                required: 'nhap du thong tin',
                maxLength: {
                    value: 5,
                    message: 'error message'
                }
            }
        },
        {
            name: 'age',
            label: 'age',
            validate: {
                required: 'nhap du thong tin tuoi tac',
                maxLength: {
                    value: 2,
                    message: 'error message'
                },
                minLength: {
                    value: 1,
                    message: 'error message'
                },
            }
        }

    ]
    const form = useForm({
        defaultValues: {
            name: '',
            age: ''
        }
    })
    const handlesb = function (data) {
        console.log(data)
    }
    const { handleSubmit } = form

    return (
        <form onSubmit={handleSubmit(handlesb)}>
            {
                InputValidateInfo.map((item,index) => {
                    return <InputElm key={index} contentLabel={item.label} namePr={item.name} validate={item.validate} form={form}/>
                })
            }
            <input type='submit' />
        </form>
    );
}

export default FormHandle;