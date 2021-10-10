import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classnames from 'classnames'
import { NavLink, useRouteMatch } from 'react-router-dom';
ProductDetailMenu.propTypes = {

};

function ProductDetailMenu() {
    const listLink = ['description', 'additionalinfomation', 'reviews']
    const { url } = useRouteMatch()
    return (
        <ul className="product-detail__menu">
            {listLink.map((item, i) => (
                <li key={i} className='product-detail__item'>
                    <NavLink className='product-detail__link' to={`${url}${i===0?'':'/'+item}`} exact>{i===1?'additional infomation':item}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default ProductDetailMenu;