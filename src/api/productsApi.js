import axiosClient from "./axiosClient";

export const productsApi = {
    async getAll(param = { page: 1, _limit: 20 }) {

        const newParam = { ...param }
        newParam._start = newParam.page > 1 ? (newParam.page-1) * newParam._limit : 0
        delete newParam.page
        const data = await axiosClient.get('/products', { params:newParam })
        const total = await axiosClient.get('/products/count', { params:newParam })

        return{
            data,
            pagination:{
                ...param,total
            }
        }
    },
    get(id) {
        const url = `/products/ ${id}`

        return axiosClient.get(url)
    },
    add(data) {
        const url = '/products/'

        return axiosClient.post(url, data)
    },
    update(data) {
        const url = `/products/:${data.id}`

        return axiosClient.patch(url, data)
    },
    remove(id) {
        const url = `/products/:${id}`

        return axiosClient.get(url)
    },

}
