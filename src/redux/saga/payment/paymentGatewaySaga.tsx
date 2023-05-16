import { call, put } from "redux-saga/effects";
import PaymentGatewayApi from "../../../api/payment/paymentGatewayApi";
import {
  GetPaymentGatewaySuccess,
  GetPaymentGatewayFailed,
  AddPaymentGatewaySuccess,
  AddPaymentGatewayFailed,
  FindPaymentGatewaySuccess,
  FindPaymentGatewayFailed,
  EditPaymentGatewaySuccess,
  EditPaymentGatewayFailed,
  DeletePaymentGatewaySuccess,
  DeletePaymentGatewayFailed,
} from "../../action/payment/paymentGatewayAction";

function* handleGetPaymentGateway(): any {
  try {
    const result = yield call(PaymentGatewayApi.getPaymentGateway);
    yield put(GetPaymentGatewaySuccess(result));
  } catch (error) {
    yield put(GetPaymentGatewayFailed(error));
  }
}

function* handleAddPaymentGateway(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentGatewayApi.createPaymentGateway, payload);
    yield put(AddPaymentGatewaySuccess(result.data));
  } catch (error) {
    yield put(AddPaymentGatewayFailed(error));
  }
}

function* handleFindPaymentGateway(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentGatewayApi.findOnePaymentGateway, payload);
    yield put(FindPaymentGatewaySuccess(result));
  } catch (error) {
    yield put(FindPaymentGatewayFailed(error));
  }
}

function* handleEditPaymentGateway(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentGatewayApi.updatePaymentGateway, payload);
    yield put(EditPaymentGatewaySuccess(result.data));
  } catch (error) {
    yield put(EditPaymentGatewayFailed(error));
  }
}

function* handleDeletePaymentGateway(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentGatewayApi.deletePaymentGateway, payload);
    yield put(DeletePaymentGatewaySuccess(result.data));
  } catch (error) {
    yield put(DeletePaymentGatewayFailed(error));
  }
}

export { handleGetPaymentGateway, handleAddPaymentGateway, handleFindPaymentGateway, handleEditPaymentGateway, handleDeletePaymentGateway };
