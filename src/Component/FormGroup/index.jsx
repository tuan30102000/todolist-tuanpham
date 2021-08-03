import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './style.scss';

FormGroup.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    formName: PropTypes.string.isRequired,
};
FormGroup.defaultProps = {
    type: 'text',
}

function FormGroup(props) {
    const { type, name, form, formName } = props
    const { register, formState } = form
    const { errors } = formState
    const [inputType, setinputType] = useState(type)
    const hasErrors = !!(errors[name] /* && touchedFields */)
    const handleChangeType = () => {
        setinputType(inputType === 'password' ? 'text' : 'password')
    }
    const firstName = register(name, { shouldUnregister: true })
    console.log(firstName)
    return (
        <div className={classNames({
            'form-group': true,
            invalid: hasErrors
        })}>
            <label htmlFor={formName + '-' + name}>{name}</label>
            <div className="form-control-box">
                <input type={inputType}

                    className='form-control'
                    id={formName + '-' + name}
                    name={name}
                    // {...register(name, { shouldUnregister: true })}
                    onChange={firstName.onChange}
                    onBlur={firstName.onBlur}
                    ref={firstName.ref}
                />
                {type === 'password' && <span onClick={handleChangeType}><i className={classNames({ 'fal fa-eye': inputType === 'password', 'fal fa-eye-slash': inputType !== 'password', })}></i></span>}
            </div>
            {hasErrors && <p className="error-message">{errors[name]?.message}</p>}


        </div>
    );
}

export default FormGroup;