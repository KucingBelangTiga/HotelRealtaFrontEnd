import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing/listOrder'

const list = async (data:any, page:number) => {
    try {
        const result = await axios.get(`${urlAPI}/detail/${data.podePoheId}/${page}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/detail/${data.podePoheId}/${data.podeId}/deletedetail`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/detail/${payload.podePoheId}/adddetail`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/detail/${data.podePoheId}/${data.podeId}/editdetail`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list, deleted, create, update }