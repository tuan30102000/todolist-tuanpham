import React from 'react';
import { useSelector } from 'react-redux';
import { totalPriceSelector } from '../../selectors';
import method from '../../../../constants/method';
import './style.scss';

CartTotal.propTypes = {

};

function CartTotal(props) {
    const totalPrice = useSelector(totalPriceSelector)
    const fullName = useSelector(state => state.user.current.fullName)
    
    return (
        <div className='cart__total'>
            <p>{fullName}</p>
            <p>
                Tổng tiền :  {method.changeNumberToString(totalPrice)}đ
            </p>
        </div>
    );
}

export default CartTotal;