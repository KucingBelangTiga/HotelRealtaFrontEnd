import axios from "axios";

const getAllPaymentTransaction = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymenttrx/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const getPaymentTransaction = async (action: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymenttrx/?page=${action.page}&name=${action.name}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const createPaymentTransaction = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/paymenttrx/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updatePaymentTransaction = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/paymenttrx/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOnePaymentTransaction = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymenttrx/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deletePaymentTransaction = async (id: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/paymenttrx/${id}`);
    return result.data;
  } catch (error) {
    return error;
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
