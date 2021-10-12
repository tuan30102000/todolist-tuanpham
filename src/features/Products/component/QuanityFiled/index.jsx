import React from 'react';
import './style.scss';
QuanityFiled.propTypes = {

};

function QuanityFiled({ form, nameFiled }) {
    const { register, getValues, setValue, formState: {  errors } } = form
    const hasErrors = !!errors[nameFiled]
    const handleChange = (x) => {
        if (x === '-') setValue(nameFiled, getValues(nameFiled) - 1 >= 0 ? getValues(nameFiled) - 1 : 0)
        if (x === '+') setValue(nameFiled, getValues(nameFiled) + 1)
    }

    return (
        <div className='quantity-filed'>
            <div  onClick={() => { handleChange('-') }} className="btn plus">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
            </div>
            <div className="input-box">
                <input type="number" {...register(nameFiled, {
                })} />
            </div>
            <div onClick={() => { handleChange('+') }} className="btn plus">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
            </div>
            {hasErrors && <p>{errors[nameFiled]?.message}</p>}
        </div>
    );
}

export default QuanityFiled;