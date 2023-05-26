import axios from "axios";

const getPaymentGateway = async () => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymentgateway/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const createPaymentGateway = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/paymentgateway/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updatePaymentGateway = async (payload: any) => {
  try {
    const result = await axios.put(`${process.env.URL_DOMAIN}/paymentgateway/${payload.pagaEntityId}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOnePaymentGateway = async (id: any) => {
  try {
    const result = await axios.get(`${process.env.URL_DOMAIN}/paymentgateway/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deletePaymentGateway = async (id: any) => {
  try {
    const result = await axios.delete(`${process.env.URL_DOMAIN}/paymentgateway/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getPaymentGateway,
  createPaymentGateway,
  updatePaymentGateway,
  findOnePaymentGateway,
  deletePaymentGateway,
};
