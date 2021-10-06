import { useEffect, useState } from "react";
import { productsApi } from "../../../api/productsApi";

export default function useFetchProduct(productId) {
    const [loading, setloading] = useState(false)
    const [productInfo, setproductInfo] = useState({})
    useEffect(() => {
        (async function () {

            try {
                const result=await productsApi.get(productId)
                setloading(true)
                setproductInfo(result)

            } catch (error) {
                console.log(error)
            }
         })()



        return () => {
        }
    }, [productId])

    return { loading, productInfo }
}