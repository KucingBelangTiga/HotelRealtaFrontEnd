import axios from "axios";
import config from "../../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/category-group`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const allApi = {
  list,
};

export default allApi;
