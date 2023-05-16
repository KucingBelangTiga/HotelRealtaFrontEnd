import axios from "axios";

const getEntitys = async () => {
  try {
    const result = await axios.get("http://localhost:3002/entitys/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const createEntitys = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/entitys/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updateEntitys = async (payload: any) => {
  try {
    const result = await axios.put(`http://localhost:3002/entitys/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOneEntitys = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/entitys/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteEntitys = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/entitys/${id}`);
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
