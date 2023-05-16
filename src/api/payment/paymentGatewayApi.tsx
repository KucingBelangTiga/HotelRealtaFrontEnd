import axios from "axios";

const getPaymentGateway = async () => {
  try {
    const result = await axios.get("http://localhost:3002/paymentgateway/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const createPaymentGateway = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/paymentgateway/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const updatePaymentGateway = async (payload: any) => {
  try {
    const result = await axios.put(`http://localhost:3002/paymentgateway/${payload.pagaEntityId}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findOnePaymentGateway = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/paymentgateway/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deletePaymentGateway = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/paymentgateway/${id}`);
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
