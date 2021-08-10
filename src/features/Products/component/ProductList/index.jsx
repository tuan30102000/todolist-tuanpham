import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import thumbnailDefault from '../../../../assets/image/thumbnail1.jpg'
import { ApiUrl } from '../../../../constants/ApiUrl';
import './style.scss'
import PaginationBtn from '../PagiantionBtn';
ProductList.propTypes = {
    productList: PropTypes.array,
};
ProductList.defaultProps = {
    productList: []
};

function ProductList(props) {
    const { productList } = props
    return (
        <div className='container__product-list grid-col-12'>
            {
                productList.map((item, index) => (

                    <div key={item.id} className="container-productList__card">
                        <ProductCard
                            name={item.name}
                            originalPrice={item.originalPrice}
                            salePrice={item.salePrice}
                            shortDescription={item.shortDescription}
                            promotionPercent={item.promotionPercent}
                            thumbnailUrl={item.thumbnail ? ApiUrl.baseURL + item.thumbnail.url : thumbnailDefault}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;