import React from 'react';
import CartListItems from '../../component/CartListItems';
import CartTotal from '../../component/CartTotal';
import './style.scss';
CartPage.propTypes = {

};

function CartPage(props) {
    return (
        <div className="cart layout">
            <div className="cart-box layout-box">
                <CartListItems />
                <CartTotal />
            </div>
        </div>
    );
}

export default CartPage;