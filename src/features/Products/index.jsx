import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage/index';
import './style.scss';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const Math = useRouteMatch()
    return (
        <div className='layout container'>
            <div className="layout-box container-box">
                <Switch>
                    {/* <Route path={Math.path} exact component={ProductPage}  /> */}
                    <Route path={`${Math.path}/:productId`} component={ProductDetailPage}/>
                    <Route path={`${Math.path}`} component={ProductPage} />
                    {/* <Redirect from={Math.path} to={`${Math.path}/list/1`}/> */}
                </Switch>
            </div>
        </div>
    );
}

export default ProductFeature;