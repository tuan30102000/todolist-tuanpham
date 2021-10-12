import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import './style.scss';
CartListItems.propTypes = {

};

function CartListItems() {
    const listItemCart = useSelector(state => state.cart.productCartList)
    console.log(listItemCart)
    return (
        <>
            {listItemCart[0] && (<div className='cart__list-item'>
                {
                    listItemCart.map((item, i) => <CartItem key={i} product={item} />)
                }
            </div>)}
            {!listItemCart[0]&&<p className="not-item">Not have item</p>}
        </>
    );
}

export default CartListItems;