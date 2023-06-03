import axios from "axios";
import config from "../../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/address/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const listPage = async (payload: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/address/page/?page=${payload.page}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/address/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/address/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/address/${payload.addrId}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/address/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  list,
  listPage,
  deleted,
  create,
  update,
  findOne,
};

export default allApi;
