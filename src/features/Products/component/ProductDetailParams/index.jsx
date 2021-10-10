import React from 'react';
import { useDispatch } from 'react-redux';
import method from '../../../../constants/method';
import { addToCart } from '../../../Cart/cartSlice';
import FormAddToCart from '../FormAddToCart';
import './style.scss';
ProductDetailParams.propTypes = {

};

function ProductDetailParams({ productInfo }) {
    const { name, originalPrice, promotionPercent, salePrice, shortDescription,id } = productInfo
    const dispatch=useDispatch()
    const handleSubmit = (data) => {
        // console.log(addToCart)
        const action=addToCart({
            ...data,productInfo,productId:id
        })
        dispatch(action)
    }
    return (
        <div className='product-detail__infor'>
            <div className="product-infor__price-des">
                <h1 className="product-detail__name">{name}</h1>
                <p className="product-detail__des">{shortDescription}</p>
                <div className="product-detail__price-group">
                    <p className="product-detail__sale-price">{method.changeMoney(salePrice)}</p>
                    {promotionPercent > 0 && <p className='product-detail__original-price' >{method.changeMoney(originalPrice)}</p>}
                    {promotionPercent > 0 && <p className='product-detail__promotion-percent' >-{promotionPercent}%</p>}
                </div>
            </div>
            <FormAddToCart onSubmit={handleSubmit} />
        </div>
    );
}

export default ProductDetailParams;