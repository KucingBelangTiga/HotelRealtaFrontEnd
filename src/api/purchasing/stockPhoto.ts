import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing/stock/photo'

const list = async (data:any) => {
    try {
        const result = await axios.get(`${urlAPI}/${data.stockId}`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/${data.sphoId}/deletephoto`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    const id = parseInt(payload.get('stockId'))
    try {
        const result = await axios.post(`${urlAPI}/${id}/addphoto`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/${data.stockId}/${data.sphoId}/editphoto`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update }