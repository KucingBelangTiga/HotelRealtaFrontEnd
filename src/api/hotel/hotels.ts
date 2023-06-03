import axios from "axios";
import config from "../../config/config";

const list = async (payload: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/hotels/all/?page=${payload.page}&name=${payload.name}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

const listAll = async () => {
  try {
    const result = await axios.get(`${config.domain}/hotels/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/hotels/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/hotels/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/hotels/${payload.hotelId}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/hotels/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  listAll,
  list,
  deleted,
  create,
  update,
  findOne,
};

export default allApi;
