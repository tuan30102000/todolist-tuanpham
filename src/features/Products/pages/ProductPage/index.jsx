import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { productsApi } from '../../../../api/productsApi';
import Loading from '../../../../Component/Loading';
import method from '../../../../constants/method';
import FilterView from '../../component/FilterViewer';
import PaginationBtn from '../../component/PagiantionBtn';
import ProductFilter from '../../component/ProductFilter/';
import ProductList from '../../component/ProductList/';
import ProductSort from '../../component/ProductSort';
import './style.scss';
ProductPage.propTypes = {

};

function ProductPage(props) {
    const [load, setload] = useState(true)
    const [productList, setproductList] = useState([])
    // const [filterInfo, setfilterInfo] = useState({
    //     page: 1, _limit: 9, _sort: 'salePrice:ASC'
    // })
    const location = useLocation()
    const filterParams = useMemo(() => {
        const seach = queryString.parse(location.search)
        const param = {
            ...seach,
            page: Number(seach.page) || 1,
            _limit: Number(seach._limit) || 9,
            _sort: seach._sort || 'salePrice:ASC',
            isFreeShip: method.changeBoolearn(seach.isFreeShip),
            isPromotion: method.changeBoolearn(seach.isPromotion),
        }
        return param
    }, [location.search])
    // const [filterInfo, setfilterInfo] = useState({
    //     ...filterParams,
    //     page: Number(filterParams.page) || 1,
    //     _limit: Number(filterParams._limit) || 9,
    //     _sort: Number(filterParams._sort) || 'salePrice:ASC'
    // })
    const history = useHistory()
    const [paginationInfo, setpaginationInfo] = useState({ page: 1, _limit: 9, total: 1 })
    const filterPagination = function (data) {
        const newFilter = { ...filterParams, page: data };
        // setfilterInfo(newFilter)
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilter)
        })
    }
    const sortProduct = function (data) {
        const newFilter = { ...filterParams, _sort: data, page: 1 };
        //  setfilterInfo(newFilter) 
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilter)
        })
    }
    const filter = function (item) {
        //  setfilterInfo((prev) => ({ ...prev, ...item, page: 1 })) 
        const newFilter = { ...filterParams, ...item, page: 1 };
        console.log(newFilter)
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilter)
        })
    }
    const filterShowChange = function (item) {
        // setfilterInfo(() => ({ ...item }))
        const newFilter = { ...item, page: 1 };
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilter)
        })

    }
    useEffect(() => {
        const getData = async function () {
            setload(true)
            try {
                let data = await productsApi.getAll(filterParams)
                setload(false)
                setproductList(data.data)
                setpaginationInfo(data.pagination)

            } catch (error) {
                console.log(error)
                // console.log(filterInfo)
            }

        }
        getData()
    }, [filterParams])

    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filterParams)
        })

    }, [filterParams,history])

    return (
        <div className='container__product'>
            <ProductFilter filterInfo={filterParams} onChange={filter} />
            <div className='container__product-show'>
                <ProductSort filterInfo={filterParams} onChange={sortProduct} />
                <FilterView filterInfo={filterParams} onChange={filterShowChange} />
                <ProductList filterInfo={filterParams} productList={productList} />
                <PaginationBtn filterFc={filterPagination} paginationInfo={paginationInfo} />
            </div>
            {load && <Loading />}
        </div>
    );
}

export default ProductPage;