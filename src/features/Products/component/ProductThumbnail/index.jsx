import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
ProductThumbnail.propTypes = {
    
};

function ProductThumbnail({thumbnailUrl}) {
    return (
        <div className='product-detail__thumbnail'>
            <img src={thumbnailUrl} alt="" />
        </div>
    );
}

export default ProductThumbnail;