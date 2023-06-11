import axios from "axios";

const createCreditAccount = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/topup/credit`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const createDebitAccount = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/topup/debet`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const createCreditTransaction = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/paymenttrx/credit`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const createDebitTransaction = async (payload: any) => {
  try {
    const result = await axios.post(`${process.env.URL_DOMAIN}/paymenttrx/debet`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  createCreditAccount,
  createDebitAccount,
  createCreditTransaction,
  createDebitTransaction,
};
