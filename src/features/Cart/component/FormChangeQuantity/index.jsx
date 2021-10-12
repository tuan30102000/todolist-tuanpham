import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeCart } from '../../cartSlice';
import './style.scss';
FormChangeQuantity.propTypes = {

};

function FormChangeQuantity({ value = null, productId }) {
    const dispatch = useDispatch()
    const handlePlusBtn = () => {
        const action = changeQuantity({
            productId, quantity: value + 1
        })
        dispatch(action)
    }
    const handleMinusBtn = () => {
        if (value > 1) {
            const action = changeQuantity({
                productId, quantity: value - 1
            })
            dispatch(action)
        }
    }
    const handleInputChange = (e) => {
        const newValue = e.target.value
        console.log(newValue > 0)
        if (!isNaN(Number(newValue)) && newValue > 0) {
            const action = changeQuantity({
                quantity: newValue, productId
            })
            dispatch(action)
        }
        if (newValue === '') {

            const action = changeQuantity({
                quantity: 0, productId
            })
            dispatch(action)

        }
    }

    return (
        <div className='cart__quantity-filed'>
            <div onClick={() => { handleMinusBtn() }} className="cart__btn plus">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
            </div>
            <div className="cart__input-box">
                <input onChange={(e) => { handleInputChange(e) }} type="number" value={value} />
            </div>
            <div onClick={() => { handlePlusBtn() }} className="cart__btn plus">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
            </div>
            {/* {hasErrors && <p>{errors[nameFiled]?.message}</p>} */}
        </div>
    );
}

export default FormChangeQuantity;