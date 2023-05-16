import axios from "axios";

const getBanks = async () => {
  try {
    const result = await axios.get("http://localhost:3002/bank/");
    return result.data;
  } catch (error) {
    return await error;
  }
};

const createBank = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/bank/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateBank = async (payload: any) => {
  try {
    const result = await axios.put(`http://localhost:3002/bank/${payload.entityId}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOneBank = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/bank/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteBank = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/bank/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getBanks,
  createBank,
  updateBank,
  findOneBank,
  deleteBank,
};
