import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing'

const getAll = async()=>{
    try {
        const result = await axios.get(`${urlAPI}/listOrder`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const list = async (page:any) => {
    try {
        const result = await axios.get(`${urlAPI}/listOrder/${page}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/listOrder/${data.poheId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/listOrder/`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/listOrder/${data.poheId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update, getAll }