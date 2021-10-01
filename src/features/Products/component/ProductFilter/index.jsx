import React, { useEffect, useState } from 'react';
import categoryApi from '../../../../api/categoryApi';
import FilterByCategory from './component/FilterByCategory';
import FilterByPriceRange from './component/FilterByPriceRange';
import FilterByService from './component/FilterByService';
import './style.scss'

ProductFilter.propTypes = {

};

function ProductFilter(props) {
    const { onChange, filterInfo } = props
    const [categoryList, setcategoryList] = useState([])
    const handleFilterCategory = function (category) {
        onChange({
            'category.id': category.id,
            'category.name': category.name
        })
    }
    const handleFilterchange = function (range) {
        onChange(range)
    }
    useEffect(() => {
        const getCategory = async () => {
            try {
                let newCategoryList = await categoryApi.getAll()
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
            <FilterByCategory onChange={handleFilterCategory} categoryList={categoryList} />
            <FilterByPriceRange onChange={handleFilterchange} />
            <FilterByService onChange={handleFilterchange} filterInfo={filterInfo} />
        </div>
    );
}

export default ProductFilter;