import axios from "axios";
import axiosClient from "./axiosClient";

export const productsApi = {
    getAll(param) {
        const url = '/products/'

        return axiosClient.get(url, { params: param })
    },
    get(id) {
        const url = `/products/:${id}`

        return axiosClient.get(url)
    },
    add(data) {
        const url = '/products/'

        return axiosClient.post(url,data)
    },
    update(data) {
        const url = `/products/:${data.id}`

        return axiosClient.patch(url,data)
    },
    remove(id) {
        const url = `/products/:${id}`

        return axiosClient.get(url)
    },

}
