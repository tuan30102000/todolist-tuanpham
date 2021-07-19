import React from 'react';
import PropTypes from 'prop-types';
import FormCp from './component/FormCp';
import { useForm } from 'react-hook-form';

FormFeature.propTypes = {
    
};

function FormFeature(props) {
    const form =useForm()
    return (
        <div>
           <FormCp form={form} label='todo'/>
        </div>
    );
}

export default FormFeature;