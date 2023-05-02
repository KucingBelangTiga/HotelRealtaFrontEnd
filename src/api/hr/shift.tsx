import axios from "axios";
import config from "../../config/config";

const findData = async () => {
    try {
        const result = await axios.get('http://localhost:3002/shift/')
        return result.data
    } catch (error) {
        return error
    }
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/shift/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createShift = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/shift/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateShift = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/shift/' + payload.id, payload)
        return result
    } catch (error) {
        return error
    }
}

const deleteShift = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/shift/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { findData, findOne, createShift, updateShift, deleteShift }
