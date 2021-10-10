import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import thumbnailDefault from '../../../../assets/image/thumbnail1.jpg';
import Loading from '../../../../Component/Loading';
import { ApiUrl } from '../../../../constants/ApiUrl';
import ProductDetailMenu from '../../component/ProductDetailMenu';
import ProductDetailParams from '../../component/ProductDetailParams';
import ProductThumbnail from '../../component/ProductThumbnail';
import ProductAdditional from '../../component/SubComponent/ProductAdditional';
import ProductDescription from '../../component/SubComponent/ProductDescription';
import ProductReview from '../../component/SubComponent/ProductReview';
import useFetchProduct from '../../hook/useFetchProduct';
import './style.scss';
ProductDetailPage.propTypes = {

};

function ProductDetailPage(props) {
    const Math = useRouteMatch()
    // const history = useHistory()
    const { url, params: { productId } } = Math
    // const location = useLocation()
    // console.log(location,history,Math)
    const { loading, productInfo } = useFetchProduct(productId)
    console.log(productInfo)
    return (
        <div className='container__product-detail'>
            <div className="product-detail__box">
                <ProductThumbnail thumbnailUrl={productInfo.thumbnail ? ApiUrl.baseURL + productInfo.thumbnail.url : thumbnailDefault} />
                <ProductDetailParams productInfo={productInfo} />
            </div>

            {!loading && <Loading />}
            {/* <Redirect from={Math.url} exact to={`${Math.url}/description`} /> */}
            <ProductDetailMenu />
            <Switch >
                <Route exact path={url}><ProductDescription description={productInfo.description} /></Route>
                <Route path={url + '/additionalinfomation'}><ProductAdditional /></Route>
                <Route path={url + '/reviews'}><ProductReview /></Route>
            </Switch>
        </div>
    );
}

export default ProductDetailPage;