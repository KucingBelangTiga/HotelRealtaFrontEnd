import axios from "axios";
import config from "../../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/category-group/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const listPage = async (payload: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/category-group/page/?page=${payload.page}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/category-group/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/category-group/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const update = async (payload: any) => {
  const id = parseInt(payload.get("cagroId"));
  try {
    const result = await axios.put(
      `${config.domain}/category-group/${id}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const updatePolicy = async (payload: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/category-group/policy/${payload.pocaId}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/category-group/${id}`);
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
  updatePolicy,
};

export default allApi;
