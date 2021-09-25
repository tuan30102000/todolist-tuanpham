import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../../../api/categoryApi';
import FilterByCategory from './component/FilterByCategory';


ProductFilter.propTypes = {

};

function ProductFilter(props) {
    const { onChange } = props
    const [categoryList, setcategoryList] = useState([])
    const handleFilterCategory =function (categoryId) {
        onChange({'category.id':categoryId})
    }
    useEffect(() => {
        const getCategory = async () => {
            try {
                let newCategoryList = await categoryApi.getAll()
                console.log(newCategoryList)
                setcategoryList(newCategoryList)

            } catch (error) {
                console.log(error)
            }
        }
        getCategory()

        return () => {

        }
    }, [])

    return (
        <div className='container__product-filter'>
            {/* <FilterByCategory categoryList={categoryList} /> */}
            <FilterByCategory onChange={handleFilterCategory} categoryList={categoryList}/>
        </div>
    );
}

export default ProductFilter;