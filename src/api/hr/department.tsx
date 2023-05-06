import axios from "axios";
import config from "../../config/config";

const findData = async () => {
    try {
        const result = await axios.get('http://localhost:3002/department/')
        return result.data
    } catch (error) {
        return error
    }
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/department/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createDept = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/department/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateDept = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/department/' + payload.deptId, payload) //kalo error payload.deptId ganti jadi payload.id
        return result
    } catch (error) {
        return error
    }
}

const deleteDept = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/department/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { findData, findOne, createDept, updateDept, deleteDept }
