import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './style.scss'
ProductSort.propTypes = {

};

function ProductSort(props) {
    const { filterInfo, onChange } = props
    return (
        <div className='Sort__btn-list'>
            <div onClick={() => { onChange('salePrice:ASC') }}
                className={classNames({
                    "Sort__up-to": true,
                    active: filterInfo._sort == 'salePrice:ASC'
                })}> Từ thấp đến cao</div>
            <div onClick={() => { onChange('salePrice:DESC') }}
                className={classNames({
                    "Sort__down-to": true,
                    active: filterInfo._sort == 'salePrice:DESC'
                })}>Từ cao đến thấp</div>

        </div>
    );
}

export default ProductSort;