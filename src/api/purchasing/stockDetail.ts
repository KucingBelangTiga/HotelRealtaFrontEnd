import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing'

const list = async (data:any) => {
    try {
        const result = await axios.get(`${urlAPI}/stock/detail/${data.stockId}`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/stock/detail/${data.stockId}/${data.stodId}/deletedetail`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/stock/detail/${payload.stockId}/adddetail`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/stock/detail/${data.stockId}/${data.stodId}/editdetail`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update }