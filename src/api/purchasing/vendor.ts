import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing'

const list = async (page:number) => {
    try {
        const result = await axios.get(`${urlAPI}/vendor/${page}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const getAll = async () => {
    try {
        const result = await axios.get(`${urlAPI}/vendor`)
        return result
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/vendor/${data.vendorId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/vendor/`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/vendor/${data.vendorId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update, getAll }