import axios from "axios";

const getAllPaymentGateway = async (payload: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymentgateway/page/?page=${payload.page}&name=${payload.name}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const getPaymentGateway = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymentgateway/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const createPaymentGateway = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/paymentgateway/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const updatePaymentGateway = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/paymentgateway/${payload.pagaEntityId}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const findOnePaymentGateway = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymentgateway/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const deletePaymentGateway = async (id: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/paymentgateway/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default {
  getPaymentGateway,
  getAllPaymentGateway,
  createPaymentGateway,
  updatePaymentGateway,
  findOnePaymentGateway,
  deletePaymentGateway,
};
