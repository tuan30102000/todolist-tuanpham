import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import method from '../../../../constants/method';
import FormAddToCart from '../FormAddToCart';
ProductDetailParams.propTypes = {

};

function ProductDetailParams({ productInfo: { name, originalPrice, promotionPercent, salePrice, shortDescription } }) {
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
            <FormAddToCart />
        </div>
    );
}

export default ProductDetailParams;