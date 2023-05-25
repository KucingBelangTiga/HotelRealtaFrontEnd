/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "../../config/config";

const findData = async () => {
    try {
        const result = await axios.get('http://localhost:3002/employee/')
        return result.data
    } catch (error) {
        return error
    } 
}

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/employee/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createEmp = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/employee/', payload, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        return result
    } catch (error) {
        return error
    }
}

const updateEmp = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/employee/' + payload.empId, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
        return result
    } catch (error) {
        return error
    }
}

const deleteEmp = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/employee/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { findData, findOne, createEmp, updateEmp, deleteEmp }
