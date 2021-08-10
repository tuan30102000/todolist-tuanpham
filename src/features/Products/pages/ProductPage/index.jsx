import React, { useEffect, useState } from 'react';
import { date } from 'yup';
import { productsApi } from '../../../../api/productsApi';
import Loading from '../../../../Component/Loading';
import PaginationBtn from '../../component/PagiantionBtn';
import ProductFilter from '../../component/ProductFilter/';
import ProductList from '../../component/ProductList/';
import './style.scss';
ProductPage.propTypes = {

};

function ProductPage(props) {
    const [load, setload] = useState(true)
    const [productList, setproductList] = useState([])
    const [filterInfo, setfilterInfo] = useState({
        page: 1, _limit: 10
    })
    const [paginationInfo, setpaginationInfo] = useState({
        page: 1, _limit: 10, total: 1
    })
    const filterPagination = function (data) {
        const newFilter={...filterInfo,page:data}
        setfilterInfo(newFilter)
    }
    useEffect(() => {
        const getData = async function () {
            setload(true)
            try {
                let data = await productsApi.getAll(filterInfo)
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
                <ProductFilter />
                <div className='container__product-show'>
                    <ProductList productList={productList} />
                    <PaginationBtn filterFc={filterPagination} paginationInfo={paginationInfo} />
                </div>
            </>)}
            {load && <Loading />}
        </div>
    );
}

export default ProductPage;