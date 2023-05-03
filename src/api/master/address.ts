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
  findOne,
};

export default allApi;
