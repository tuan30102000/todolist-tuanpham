import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

FormGroup.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    accuracy: PropTypes.object,
    formName: PropTypes.string.isRequired,
};
FormGroup.defaultProps = {
    type: 'text',
    accuracy: {}
}

function FormGroup(props) {
    const { type, name, accuracy, form, formName } = props
    const { register, unregister, formState } = form
    const { errors, touchedFields } = formState
    const [inputType, setinputType] = useState(type)
    const hasErrors = !!(errors[name] /* && touchedFields */)
    const handleChangeType = () => {
        setinputType(inputType === 'password' ? 'text' : 'password')
    }
    const newAccuracy={...accuracy,...{ shouldUnregister: true }}
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
                    {...register(name, { shouldUnregister: true })}
                />
                {type === 'password' && <span onClick={handleChangeType}><i className={classNames({ 'fal fa-eye': inputType === 'password', 'fal fa-eye-slash': inputType !== 'password', })}></i></span>}
            </div>
            {hasErrors && <p className="error-message">{errors[name]?.message}</p>}


        </div>
    );
}

export default FormGroup;