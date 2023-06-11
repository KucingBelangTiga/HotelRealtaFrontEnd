import axios from "axios";

const getAllUserAccount = async (payload: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/useraccount/page/?page=${payload.page}&name=${payload.name}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const getUserAccount = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/useraccount/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const findCurrAccountSource = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/useraccount/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const findCurrAccountTarget = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/useraccount/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const createUserAccount = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/useraccount/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const updateUserAccount = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/useraccount/${payload.usacEntityId}/${payload.usacUserId}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const findOneUserAccount = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/useraccount/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleteUserAccount = async (payload: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/useraccount/${payload.usacEntityId}/${payload.usacUserId}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default {
  getUserAccount,
  getAllUserAccount,
  findCurrAccountSource,
  findCurrAccountTarget,
  createUserAccount,
  updateUserAccount,
  findOneUserAccount,
  deleteUserAccount,
};
