import React from 'react';
import PropTypes from 'prop-types';
InputElm.propTypes = {
    namePr: PropTypes.string,
    contentLabel: PropTypes.string,
};
InputElm.defaultProps = {
    contentLabel: ''
}
function InputElm(props) {
    const { namePr, contentLabel, form,register } = props
    console.log(!'')

    return (
        <div className='formField'>
            <input
                id={'id' + namePr}
                type="text"
                name={namePr}
                {...register(namePr)}
            />
            {!!contentLabel && <label htmlFor={'id' + namePr}>{contentLabel}</label>}
        </div>
    );
}

export default InputElm;