import axios from "axios";
import config from "../../config/config";
 
//findall by woroId
const findData = async (id: number) => {
    try {
      const result = await axios.get(`http://localhost:3002/work-order-detail/all/${id}`);
      return result.data;
    } catch (error) {
      return error;
    }
  };  

const findOne = async (id: any) => { //findOne
    try {
        const result = await axios.get('http://localhost:3002/work-order-detail/' + id)
        return result.data
    } catch (error) {
        return error 
    }
}

const createWode = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3002/work-order-detail/', payload)
        return result
    } catch (error) {
        return error
    }
}

const updateWode = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3002/work-order-detail/' + payload.wodeId, payload)
        return result
    } catch (error) {
        return error
    }
}

const deleteWode = async (id: any) => {
    try {
        const result = await axios.delete('http://localhost:3002/work-order-detail/' + id)
        return result
    } catch (error) {
        return await error
    }
}

export default { findData, findOne, createWode, updateWode, deleteWode }
