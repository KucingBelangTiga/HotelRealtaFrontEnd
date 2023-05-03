import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/stock`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/stock/${data.stockId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/stock/`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/stock/${data.stockId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update }