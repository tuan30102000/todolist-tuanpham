import React from 'react';
import { useDispatch } from 'react-redux';
import defaultImg from '../../../../assets/image/thumbnail1.jpg';
import { ApiUrl } from '../../../../constants/ApiUrl';
import { removeCart } from '../../cartSlice';
import FormChangeQuantity from '../FormChangeQuantity';
import './style.scss';
CartItem.propTypes = {

};

function CartItem({ product }) {
    const { productInfo: { salePrice, originalPrice, shortDescription, thumbnail, promotionPercent } } = product
    const url = thumbnail?.url
    const dispatch = useDispatch()
    const { quantity, productId } = product
    const handleRemove = () => {
        const action = removeCart({
            productId
        })
        dispatch(action)

    }
    return (
        <div className='cart__item'>
            <div className="cart__item-thumbnail">
                <img src={url ? ApiUrl.baseURL + url : defaultImg} alt="" className="cart__item-img" />
            </div>
            <div className="cart__item-des">
                <p className="cart__item-des-content">{shortDescription}</p>
                <button onClick={handleRemove}>xóa</button>
            </div>
            <div className="cart__item-price">
                <span className="cart__item-sale-price">{salePrice}đ</span>
                {

                    promotionPercent > 0 &&
                    (<>
                        <span className="cart__item-origanal-price">{originalPrice}đ</span>
                        <span className="cart__item-percent">-{promotionPercent}%</span>

                    </>)
                }

            </div>
            <div className="cart__item-quantity">
                <FormChangeQuantity productId={productId} value={quantity} />
            </div>

            <p className="cart__item-total">

                Thành tiền :    {quantity * salePrice}
            </p>
        </div>
    );
}

export default CartItem;