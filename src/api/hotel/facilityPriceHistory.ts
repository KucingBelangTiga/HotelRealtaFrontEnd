import axios from "axios";
import config from "../../config/config";

const listPage = async (payload: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/facility-price-history/all/?page=${payload.page}&id=${payload.id}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

const list = async (id: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/facility-price-history/${id}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/facility-price-history/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  listPage,
  list,
  create,
};

export default allApi;
