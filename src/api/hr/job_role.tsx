import axios from "axios";
import config from "../../config/config";

const findData = async () => { 
    try {
        const result = await axios.get('http://localhost:3002/job-role/')
        return result.data
    } catch (error) {
        return error
    }
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/job-role/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createJoro = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/job-role/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateJoro = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/job-role/' + payload.id, payload)
        return result
    } catch (error) {
        return error
    }
}

const deleteJoro = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/job-role/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { findData, findOne, createJoro, updateJoro, deleteJoro }
