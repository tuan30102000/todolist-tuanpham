import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'
InputElm.propTypes = {
    namePr: PropTypes.string,
    contentLabel: PropTypes.string,
    validate:PropTypes.object,
};
InputElm.defaultProps = {
    contentLabel: ''
}
function InputElm(props) {
    const { namePr, contentLabel, form,validate } = props
    let hasErrors = form.formState.touchedFields[namePr] && form.formState.errors[namePr]
    return (
        <div className={classNames(
            {
                'form-field':true,
                'invalid':!!hasErrors
            }
        )}>
            <input
                id={'id-' + namePr}
                type="text"
                name={namePr}
                {...form.register(namePr,validate,)}
            />
            {!!contentLabel && <label htmlFor={'id' + namePr}>{contentLabel}</label>}
            {!!hasErrors&&<p>{form.formState.errors[namePr]?.message}</p>}
        </div>
    );
}

export default InputElm;