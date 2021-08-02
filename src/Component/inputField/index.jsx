import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {

};

function InputField(props) {
    const { form, name, label } = props
    let hasErrors = form.formState.touchedFields[name] && form.formState.errors[name]
    console.log(hasErrors)
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
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!hasErrors}
                    helperText={form.formState.errors[name]?.message}

                />
            )}
        ></Controller>
    );
}

export default InputField;