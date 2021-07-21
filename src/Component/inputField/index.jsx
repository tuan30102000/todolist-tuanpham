import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {

};

function InputField(props) {
    const { form ,name,label} = props
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, error } }) => (
                
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label={label}
                    name={name}
                  
                />
            )}
        ></Controller>
    );
}

export default InputField;