import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../../../../Component/FormGroup';
import { useForm } from 'react-hook-form';

RegisterForm.propTypes = {

};

function RegisterForm(props) {
    // const form=useForm({
    //     defaultValues:{
    //         name:'',
    //         email:'',
    //         password:'',
    //         passwordRepeat:'',
    //     }
    // })
    return (
        <div>
            <FormGroup name='name'/>
        </div>
    );
}

export default RegisterForm;