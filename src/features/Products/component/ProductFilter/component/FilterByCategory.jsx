import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

FilterByCategory.propTypes = {

};

function FilterByCategory(props) {
    const { categoryList,onChange } = props
    return (
        <div className='category__list'>
        <p className="filter__title">
            Danh Mục
        </p>
            {categoryList.map(
                (item)=>(
                    <div className={classNames({
                        'category__item':true
                        
                    })} key={item.id}
                        onClick={()=>{onChange(item)}}
                    >
                        {item.name}
                    </div>
                )
            )}
        </div>
    );
}

export default FilterByCategory;