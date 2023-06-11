import axios from "axios";

const getPaymentTransaction = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymenttrx/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const getAllPaymentTransaction = async (payload: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymenttrx/page/?page=${payload.page}&name=${payload.name}&type=${payload.type}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const createPaymentTransaction = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/paymenttrx/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const updatePaymentTransaction = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/paymenttrx/${payload.id}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const findOnePaymentTransaction = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymenttrx/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deletePaymentTransaction = async (id: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/paymenttrx/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default {
  getAllPaymentTransaction,
  getPaymentTransaction,
  createPaymentTransaction,
  updatePaymentTransaction,
  findOnePaymentTransaction,
  deletePaymentTransaction,
};
