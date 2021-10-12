import React from 'react';
import './style.scss';
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