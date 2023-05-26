import axios from "axios";

const getEntitys = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/entitys/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const createEntitys = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/entitys/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateEntitys = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/entitys/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOneEntitys = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/entitys/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteEntitys = async (id: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/entitys/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getEntitys,
  createEntitys,
  updateEntitys,
  findOneEntitys,
  deleteEntitys,
};
