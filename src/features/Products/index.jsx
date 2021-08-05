import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductPage from './pages/ProductPage/index';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const Math=useRouteMatch()
    return (
        <div className='layout container'>
            <div className="layout-box container-box">
                <Switch>
                    <Route path={Math.path} exact component={ProductPage}  />
                </Switch>
            </div>
        </div>
    );
}

export default ProductFeature;