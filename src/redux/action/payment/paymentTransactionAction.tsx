import * as ActionPaymentTransaction from "../../constant/payment/paymentTransactionConstant";

export const GetAllPaymentTransactionRequest = (payload: any) => ({
  type: ActionPaymentTransaction.GET_ALL_PAYMENTTRANSACTION_REQUEST,
  payload,
});

export const GetAllPaymentTransactionSuccess = (payload: any) => ({
  type: ActionPaymentTransaction.GET_ALL_PAYMENTTRANSACTION_SUCCESS,
  payload,
});

export const GetAllPaymentTransactionFailed = (payload: any) => ({
  type: ActionPaymentTransaction.GET_ALL_PAYMENTTRANSACTION_FAILED,
  payload,
});

export const GetPaymentTransactionRequest = () => ({
  type: ActionPaymentTransaction.GET_PAYMENTTRANSACTION_REQUEST,
});

export const GetPaymentTransactionSuccess = (payload: any) => ({
  type: ActionPaymentTransaction.GET_PAYMENTTRANSACTION_SUCCESS,
  payload,
});

export const GetPaymentTransactionFailed = (payload: any) => ({
  type: ActionPaymentTransaction.GET_PAYMENTTRANSACTION_FAILED,
  payload,
});

export const AddPaymentTransactionRequest = (payload: any) => ({
  type: ActionPaymentTransaction.ADD_PAYMENTTRANSACTION_REQUEST,
  payload,
});

export const AddPaymentTransactionSuccess = (payload: any) => ({
  type: ActionPaymentTransaction.ADD_PAYMENTTRANSACTION_SUCCESS,
  payload,
});

export const AddPaymentTransactionFailed = (payload: any) => ({
  type: ActionPaymentTransaction.ADD_PAYMENTTRANSACTION_FAILED,
  payload,
});

export const FindPaymentTransactionRequest = (payload: any) => ({
  type: ActionPaymentTransaction.FIND_PAYMENTTRANSACTION_REQUEST,
  payload,
});

export const FindPaymentTransactionSuccess = (payload: any) => ({
  type: ActionPaymentTransaction.FIND_PAYMENTTRANSACTION_SUCCESS,
  payload,
});

export const FindPaymentTransactionFailed = (payload: any) => ({
  type: ActionPaymentTransaction.FIND_PAYMENTTRANSACTION_FAILED,
  payload,
});

export const EditPaymentTransactionRequest = (payload: any) => ({
  type: ActionPaymentTransaction.EDIT_PAYMENTTRANSACTION_REQUEST,
  payload,
});

export const EditPaymentTransactionSuccess = (payload: any) => ({
  type: ActionPaymentTransaction.EDIT_PAYMENTTRANSACTION_SUCCESS,
  payload,
});

export const EditPaymentTransactionFailed = (payload: any) => ({
  type: ActionPaymentTransaction.EDIT_PAYMENTTRANSACTION_FAILED,
  payload,
});

export const DeletePaymentTransactionRequest = (payload: any) => ({
  type: ActionPaymentTransaction.DEL_PAYMENTTRANSACTION_REQUEST,
  payload,
});

export const DeletePaymentTransactionSuccess = (payload: any) => ({
  type: ActionPaymentTransaction.DEL_PAYMENTTRANSACTION_SUCCESS,
  payload,
});

export const DeletePaymentTransactionFailed = (payload: any) => ({
  type: ActionPaymentTransaction.DEL_PAYMENTTRANSACTION_FAILED,
  payload,
});
