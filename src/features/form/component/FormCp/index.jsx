import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '../../../../component/FormControl';

FormCp.propTypes = {

};

function FormCp(props) {
    const {form}=props
    const handlesubmit=function(value){
     console.log('data is',value)       
    }
    return (
       
        <form onSubmit={form.handleSubmit(handlesubmit)}>
            <FormControl />
        </form>
    );
}

export default FormCp;