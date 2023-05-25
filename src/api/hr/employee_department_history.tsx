/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "../../config/config";

const getData = async () => {
    try {
        const result = await axios.get('http://localhost:3002/employee-department-history/')
        return result.data
    } catch (error) {
        return error
    }
} 
   
//edhiEmp
const findData = async (id: any) => { //id asli : number
    try { 
        const result = await axios.get(`http://localhost:3002/employee-department-history/all/${id}`);
        return result.data
    } catch (error) {
        return error
    }  
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/employee-department-history/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createEdh = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/employee-department-history/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateEdh = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/employee-department-history/' + payload.edhiId, payload)
        return result
    } catch (error) {
        return error
    }
}

const deleteEdh = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/employee-department-history/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { getData, findData, findOne, createEdh, updateEdh, deleteEdh }
