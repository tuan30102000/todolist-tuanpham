import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import ProductPage from '../ProductPage';
import { useRouteMatch } from 'react-router';
import ProductThumbnail from '../../component/ProductThumbnail';
import thumbnailDefault from '../../../../assets/image/thumbnail1.jpg';
import ProductDetailParams from '../../component/ProductDetailParams';
import useFetchProduct from '../../hook/useFetchProduct';
import { ApiUrl } from '../../../../constants/ApiUrl';
import Loading from '../../../../Component/Loading';
ProductDetailPage.propTypes = {

};

function ProductDetailPage(props) {
    const Math = useRouteMatch()
    const { params: { productId } } = Math
    const { loading, productInfo } = useFetchProduct(productId)
    return (
        <div className='container__product-detail'>
            <ProductThumbnail thumbnailUrl={productInfo.thumbnail ? ApiUrl.baseURL + productInfo.thumbnail.url : thumbnailDefault} />
            <ProductDetailParams productInfo={productInfo} />
            {!loading && <Loading />}
        </div>
    );
}

export default ProductDetailPage;