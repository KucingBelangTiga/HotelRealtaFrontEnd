import axios from "axios";
import config from "../../config/config";

const listAll = async () => {
  try {
    const result = await axios.get(`${config.domain}/hotels/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const list = async (action: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/hotels/?page=${action.page}&name=${action.name}`
    );
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
  list,
  deleted,
  create,
  update,
  findOne,
  listAll,
};

export default allApi;
