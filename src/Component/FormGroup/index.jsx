import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

FormGroup.propTypes = {
    type: PropTypes.string,
    // name: PropTypes.string.isRequired,
    // form: PropTypes.func.isRequired,
    accuracy: PropTypes.object,
};
FormGroup.defaultProps = {
    type: 'text',
    accuracy: null
}

function FormGroup(props) {
    const { type, name, accuracy } = props
    // const { register, formState } = form
    const [inputType, setinputType] = useState(type)
    const handleChangeType = () => {
        setinputType(inputType === 'password' ? 'text' : 'password')
    }
    return (
        <div className='form-group'>
            <input type={inputType}
                // {...register(name,accuracy)}
            />
            {type === 'password' && <span onClick={handleChangeType}><i className={classNames({ 'fal fa-eye': inputType === 'password', 'fal fa-eye-slash': inputType !== 'password', })}></i></span>}
            <p className="erro">ada</p>


        </div>
    );
}

export default FormGroup;