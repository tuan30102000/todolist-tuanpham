import React from 'react';
import ProductFilter from '../../component/ProductFilter';
import ProductList from '../../component/ProductList';
import './style.scss';
ProductPage.propTypes = {

};

function ProductPage(props) {
    return (
        <div className='container__product'>
            <ProductFilter/>
            <ProductList/>
        </div>
    );
}

export default ProductPage;