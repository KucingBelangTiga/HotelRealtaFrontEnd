import axios from "axios";
import config from "../../config/config";

const list = async (id: number) => {
  try {
    const result = await axios.get(`${config.domain}/facility-photos/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/facility-photos/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/facility-photos/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/facility-photos/${payload.faphoId}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  list,
  deleted,
  create,
  update,
};

export default allApi;
