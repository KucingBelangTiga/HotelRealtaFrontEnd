import axios from "axios";
import config from "../../config/config";

const list = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/facilities/all/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/facilities/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/facilities/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/facilities/${payload.faciId}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/facilities/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  list,
  deleted,
  create,
  update,
  findOne,
};

export default allApi;
