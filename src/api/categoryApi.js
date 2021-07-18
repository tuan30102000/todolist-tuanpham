import axios from "axios";
import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(param) {
        const url = '/categories/'

        return axiosClient.get(url, { params: param })
    },
    get(id) {
        const url = `/categories/:${id}`

        return axiosClient.get(url)
    },
    add(data) {
        const url = '/categories/'

        return axiosClient.post(url,data)
    },
    update(data) {
        const url = `/categories/:${data.id}`

        return axiosClient.patch(url)
    },
    remove(id) {
        const url = `/categories/:${id}`

        return axiosClient.get(url)
    },

}
