import axios from "axios";

const getUserAccount = async (action: any) => {
  try {
    const result = await axios.get("http://localhost:3002/useraccount/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const createUserAccount = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/useraccount/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateUserAccount = async (payload: any) => {
  try {
    const result = await axios.put(`http://localhost:3002/useraccount/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOneUserAccount = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/useraccount/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteUserAccount = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/useraccount/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getUserAccount,
  createUserAccount,
  updateUserAccount,
  findOneUserAccount,
  deleteUserAccount,
};
