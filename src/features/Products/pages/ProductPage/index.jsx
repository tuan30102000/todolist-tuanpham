import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { productsApi } from '../../../../api/productsApi';
import Loading from '../../../../Component/Loading';
import ProductFilter from '../../component/ProductFilter/';
import ProductList from '../../component/ProductList/';
import './style.scss';
ProductPage.propTypes = {

};

function ProductPage(props) {
    const [load, setload] = useState(true)
    const [productList, setproductList] = useState([])
    useEffect(() => {
        const getData = async function () {
            try {
                let data = await productsApi.getAll()
                setload(false)
                setproductList(data.data)
            } catch (error) {
                console.log(error)
            }
           
        }
        getData()
    }, [])

    return (
        <div className='container__product'>
            {!load && (<>
                <ProductFilter />
                <ProductList productList={productList} />
            </>)}
            {load && <Loading />}



        </div>
    );
}

export default ProductPage;