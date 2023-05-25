import axios from "axios";
import config from "../../config/config";

const getData = async () => {
    try {
        const result = await axios.get('http://localhost:3002/employee-pay-history/')
        return result.data
    } catch (error) {
        return error
    }
}

//ephiEmp
const findData = async (id: number) => {
    try {
        const result = await axios.get(`http://localhost:3002/employee-pay-history/all/${id}`);
        return result.data
    } catch (error) {
        return error
    }
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/employee-pay-history/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createEph = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/employee-pay-history/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateEph = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/employee-pay-history/' + payload.ephiId, payload)
        return result
    } catch (error) {
        return error
    }
}

const deleteEph = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/employee-pay-history/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { getData, findData, findOne, createEph, updateEph, deleteEph }
