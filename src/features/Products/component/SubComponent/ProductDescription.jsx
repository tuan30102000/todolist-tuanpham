import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import DOMPurify from 'dompurify';

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