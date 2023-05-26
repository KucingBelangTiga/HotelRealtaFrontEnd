import * as DebitCreditType from "../../constant/payment/topUpConstan";

export const CreditAccountRequest = (payload: any) => ({
  type: DebitCreditType.ADD_CREDIT_ACCOUNT_REQUEST,
  payload,
});

export const CreditAccountSuccess = (payload: any) => ({
  type: DebitCreditType.ADD_CREDIT_ACCOUNT_SUCCESS,
  payload,
});

export const CreditAccountFailed = (payload: any) => ({
  type: DebitCreditType.ADD_CREDIT_ACCOUNT_FAILED,
  payload,
});

export const DebitAccountRequest = (payload: any) => ({
  type: DebitCreditType.ADD_DEBIT_ACCOUNT_REQUEST,
  payload,
});

export const DebitAccountSuccess = (payload: any) => ({
  type: DebitCreditType.ADD_DEBIT_ACCOUNT_SUCCESS,
  payload,
});

export const DebitAccountFailed = (payload: any) => ({
  type: DebitCreditType.ADD_DEBIT_ACCOUNT_FAILED,
  payload,
});

export const CreditTransactionRequest = (payload: any) => ({
  type: DebitCreditType.ADD_CREDIT_TRANSACTION_REQUEST,
  payload,
});

export const CreditTransactionSuccess = (payload: any) => ({
  type: DebitCreditType.ADD_CREDIT_TRANSACTION_SUCCESS,
  payload,
});

export const CreditTransactionFailed = (payload: any) => ({
  type: DebitCreditType.ADD_CREDIT_TRANSACTION_FAILED,
  payload,
});

export const DebitTransactionRequest = (payload: any) => ({
  type: DebitCreditType.ADD_DEBIT_TRANSACTION_REQUEST,
  payload,
});

export const DebitTransactionSuccess = (payload: any) => ({
  type: DebitCreditType.ADD_DEBIT_TRANSACTION_SUCCESS,
  payload,
});

export const DebitTransactionFailed = (payload: any) => ({
  type: DebitCreditType.ADD_DEBIT_TRANSACTION_FAILED,
  payload,
});
