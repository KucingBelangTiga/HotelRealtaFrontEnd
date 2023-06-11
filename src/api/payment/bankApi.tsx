import axios from "axios";

const getAllBanks = async (payload: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/bank/page/?page=${payload.page}&name=${payload.name}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const getBanks = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/bank/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const createBank = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/bank/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const updateBank = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/bank/${payload.entityId}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const findOneBank = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/bank/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleteBank = async (id: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/bank/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default {
  getBanks,
  getAllBanks,
  createBank,
  updateBank,
  findOneBank,
  deleteBank,
};
