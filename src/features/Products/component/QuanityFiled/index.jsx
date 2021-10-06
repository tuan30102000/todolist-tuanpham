import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
QuanityFiled.propTypes = {

};

function QuanityFiled({ form, nameFiled }) {
    const { register, getValues, setValue, watch } = form
    console.log(watch())
    const handleChange = () => {
        setValue(nameFiled, getValues(nameFiled) - 1)
    }
    return (
        <div className='quantity-filed'>
            <div onClick={() => { handleChange() }} className="btn plus">
                <i className="fal fa-minus-circle"></i>
            </div>
            <input type="text" {...register(nameFiled, {
            })} />
            <div onClick={null} className="btn plus">
                <i className="fal fa-plus-circle"></i>
            </div>

        </div>
    );
}

export default QuanityFiled;