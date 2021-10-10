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
            {promotionPercent > 0 && (
                <div className="card__percent-sale">
                    {promotionPercent + '%'}
                </div>)}
            <div className="card__content">
                <p className="card-title">{method.handleString(name, 19)}</p>
                <p className="card-des">{method.handleString(shortDescription.toLowerCase(), 45)}</p>
                <p className="card-price">{method.changeMoney(promotionPercent > 0 ? salePrice : originalPrice)}</p>
            </div>

        </div>
    );
}

export default ProductCard;