import DOMPurify from 'dompurify';
import React from 'react';
import './style.scss';

ProductDescription.propTypes = {

};

function ProductDescription({ description }) {
    const clean =DOMPurify.sanitize(description)
    return (
        <div className="product-detail__des-full">
            <div dangerouslySetInnerHTML={{ __html: clean }} />
        </div>
    );
}

export default ProductDescription;