import axios from "axios";
import config from "../../config/config";

const findData = async () => {
    try {
        const result = await axios.get('http://localhost:3002/work-orders/')
        return result.data
    } catch (error) {
        return error
    }
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/work-orders/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createWoro = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/work-orders/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateWoro = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/work-orders/' + payload.id, payload)
        return result
    } catch (error) {
        return error
    }
}

const deleteWoro = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/work-orders/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { findData, findOne, createWoro, updateWoro, deleteWoro }
