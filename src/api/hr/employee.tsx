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
        const result = await axios.post('http://localhost:3002/employee/', payload)
        return result
    } catch (error) {
        return error
    }
}

// const upload = async (payload: any) => {
//     try {
//         const result = await axios.post('http://localhost:3002/employee/upload', payload)
//         return result
//     } catch (error) {
//         return error
//     }
// }
const upload = async (id: number, file: File) => {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('file', file);

    try {
        const result = await axios.post('http://localhost:3002/employee/upload', formData);
        return result;
    } catch (error) {
        return error;
    }
}

// const updatePhoto = async (payload: any) => {
//     try {
//         const result = await axios.patch(`http://localhost:3002/${payload.id}/photo`, payload.file);
//         return result;
//     } catch (error) {
//         return error;
//     }
// }
const updatePhoto = async (id: number, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const result = await axios.patch(`http://localhost:3002/employee/${id}/photo`, formData);
        return result;
    } catch (error) {
        return error;
    }
}

const updateEmp = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/employee/' + payload.id, payload)
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

export default { findData, findOne, createEmp, upload, updatePhoto, updateEmp, deleteEmp }
