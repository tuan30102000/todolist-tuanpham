import React, { useEffect, useState } from 'react';
import { date } from 'yup';
import { productsApi } from '../../../../api/productsApi';
import Loading from '../../../../Component/Loading';
import PaginationBtn from '../../component/PagiantionBtn';
import ProductList from '../../component/ProductList/';
import ProductSort from '../../component/ProductSort';
import ProductFilter from '../../component/ProductFilter/';
import './style.scss';
import queryString from 'query-string';
ProductPage.propTypes = {

};

function ProductPage(props) {
    const [load, setload] = useState(true)
    const [productList, setproductList] = useState([])
    const [filterInfo, setfilterInfo] = useState({
        page: 1, _limit: 9, _sort: 'salePrice:ASC'
    })
    const [paginationInfo, setpaginationInfo] = useState({
        page: 1, _limit: 9, total: 1
    })
    const filterPagination = function (data) {
        const newFilter = { ...filterInfo, page: data }
        setfilterInfo(newFilter)
    }
    const sortProduct = function (data) {
        const newFilter = { ...filterInfo, _sort: data, page: 1 }
        setfilterInfo(newFilter)
    }
    const filterByCategory = function (item) {
        setfilterInfo((prev) => (
            { ...prev, ...item }
        ))
    }
    useEffect(() => {
        const getData = async function () {
            setload(true)
            try {
                let data = await productsApi.getAll(filterInfo)
                console.log(queryString.stringify(filterInfo))
                setload(false)
                setproductList(data.data)
                setpaginationInfo(data.pagination)

            } catch (error) {
                console.log(error)
            }

        }
        getData()
    }, [filterInfo])

    return (
        <div className='container__product'>
            {!load && (<>
                <ProductFilter  onChange={filterByCategory}/>
                <div className='container__product-show'>
                    <ProductSort filterInfo={filterInfo} onchange={sortProduct} />
                    <ProductList productList={productList} />
                    <PaginationBtn filterFc={filterPagination} paginationInfo={paginationInfo} />
                </div>
            </>)}
            {load && <Loading />}
        </div>
    );
}

export default ProductPage;