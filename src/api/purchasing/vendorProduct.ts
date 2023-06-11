import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing/vendor'

const list = async (data:any) => {
    try {
        const result = await axios.get(`${urlAPI}/product/${data.vendorId}`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}

const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/product/${data.veproId}/deleteproduct`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/product/${payload.vendorId}/addproduct`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/product/${data.veproId}/editproduct`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update}