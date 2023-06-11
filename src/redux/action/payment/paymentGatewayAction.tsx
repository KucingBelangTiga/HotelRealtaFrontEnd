import * as ActionPaymentGateway from "../../constant/payment/paymentGatewayConstant";

export const GetAllPaymentGatewayRequest = (payload: any) => ({
  type: ActionPaymentGateway.GET_ALL_PAYMENTGATEWAY_REQUEST,
  payload,
});

export const GetAllPaymentGatewaySuccess = (payload: any) => ({
  type: ActionPaymentGateway.GET_ALL_PAYMENTGATEWAY_SUCCESS,
  payload,
});

export const GetAllPaymentGatewayFailed = (payload: any) => ({
  type: ActionPaymentGateway.GET_ALL_PAYMENTGATEWAY_FAILED,
  payload,
});

export const GetPaymentGatewayRequest = () => ({
  type: ActionPaymentGateway.GET_PAYMENTGATEWAY_REQUEST,
});

export const GetPaymentGatewaySuccess = (payload: any) => ({
  type: ActionPaymentGateway.GET_PAYMENTGATEWAY_SUCCESS,
  payload,
});

export const GetPaymentGatewayFailed = (payload: any) => ({
  type: ActionPaymentGateway.GET_PAYMENTGATEWAY_FAILED,
  payload,
});

export const AddPaymentGatewayRequest = (payload: any) => ({
  type: ActionPaymentGateway.ADD_PAYMENTGATEWAY_REQUEST,
  payload,
});

export const AddPaymentGatewaySuccess = (payload: any) => ({
  type: ActionPaymentGateway.ADD_PAYMENTGATEWAY_SUCCESS,
  payload,
});

export const AddPaymentGatewayFailed = (payload: any) => ({
  type: ActionPaymentGateway.ADD_PAYMENTGATEWAY_FAILED,
  payload,
});

export const FindPaymentGatewayRequest = (payload: any) => ({
  type: ActionPaymentGateway.FIND_PAYMENTGATEWAY_REQUEST,
  payload,
});

export const FindPaymentGatewaySuccess = (payload: any) => ({
  type: ActionPaymentGateway.FIND_PAYMENTGATEWAY_SUCCESS,
  payload,
});

export const FindPaymentGatewayFailed = (payload: any) => ({
  type: ActionPaymentGateway.FIND_PAYMENTGATEWAY_FAILED,
  payload,
});

export const EditPaymentGatewayRequest = (payload: any) => ({
  type: ActionPaymentGateway.EDIT_PAYMENTGATEWAY_REQUEST,
  payload,
});

export const EditPaymentGatewaySuccess = (payload: any) => ({
  type: ActionPaymentGateway.EDIT_PAYMENTGATEWAY_SUCCESS,
  payload,
});

export const EditPaymentGatewayFailed = (payload: any) => ({
  type: ActionPaymentGateway.EDIT_PAYMENTGATEWAY_FAILED,
  payload,
});

export const DeletePaymentGatewayRequest = (payload: any) => ({
  type: ActionPaymentGateway.DEL_PAYMENTGATEWAY_REQUEST,
  payload,
});

export const DeletePaymentGatewaySuccess = (payload: any) => ({
  type: ActionPaymentGateway.DEL_PAYMENTGATEWAY_SUCCESS,
  payload,
});

export const DeletePaymentGatewayFailed = (payload: any) => ({
  type: ActionPaymentGateway.DEL_PAYMENTGATEWAY_FAILED,
  payload,
});
