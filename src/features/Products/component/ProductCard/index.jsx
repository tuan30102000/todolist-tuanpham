import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import method from '../../../../constants/method';
ProductCard.propTypes = {

};

function ProductCard(props) {
    const { name,
        originalPrice,
        salePrice,
        shortDescription,
        promotionPercent,
        thumbnailUrl,
    } = props
    return (
        <div className='product-card'>
            <div className="card__img-box">
                <img src={thumbnailUrl} alt="" />
            </div>
            <div className="card__content">
                <p className="card-title">{method.handleString(name,23)}</p>
                <p className="card-des">{method.handleString(shortDescription.toLowerCase(),45)}</p>
                <p className="card-price">{method.changeMoney(promotionPercent > 0 ? salePrice : originalPrice)}</p>
            </div>

        </div>
    );
}

export default ProductCard;