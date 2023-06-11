import { call, put } from "redux-saga/effects";
import PaymentTransactionApi from "../../../api/payment/paymentTransactionApi";
import {
  GetPaymentTransactionSuccess,
  GetPaymentTransactionFailed,
  GetAllPaymentTransactionSuccess,
  GetAllPaymentTransactionFailed,
  AddPaymentTransactionSuccess,
  AddPaymentTransactionFailed,
  FindPaymentTransactionSuccess,
  FindPaymentTransactionFailed,
  EditPaymentTransactionSuccess,
  EditPaymentTransactionFailed,
  DeletePaymentTransactionSuccess,
  DeletePaymentTransactionFailed,
} from "../../action/payment/paymentTransactionAction";

function* handleGetAllPaymentTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentTransactionApi.getAllPaymentTransaction, payload);
    yield put(GetAllPaymentTransactionSuccess(result));
  } catch (error) {
    yield put(GetAllPaymentTransactionFailed(error));
  }
}

function* handleGetPaymentTransaction(): any {
  try {
    const result = yield call(PaymentTransactionApi.getPaymentTransaction);
    yield put(GetPaymentTransactionSuccess(result));
  } catch (error) {
    yield put(GetPaymentTransactionFailed(error));
  }
}

function* handleAddPaymentTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentTransactionApi.createPaymentTransaction, payload);
    yield put(AddPaymentTransactionSuccess(result.data));
  } catch (error) {
    yield put(AddPaymentTransactionFailed(error));
  }
}

function* handleFindPaymentTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentTransactionApi.findOnePaymentTransaction, payload);
    yield put(FindPaymentTransactionSuccess(result));
  } catch (error) {
    yield put(FindPaymentTransactionFailed(error));
  }
}

function* handleEditPaymentTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentTransactionApi.updatePaymentTransaction, payload);
    yield put(EditPaymentTransactionSuccess(result.data));
  } catch (error) {
    yield put(EditPaymentTransactionFailed(error));
  }
}

function* handleDeletePaymentTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PaymentTransactionApi.deletePaymentTransaction, payload);
    yield put(DeletePaymentTransactionSuccess(result.data));
  } catch (error) {
    yield put(DeletePaymentTransactionFailed(error));
  }
}

export { handleGetPaymentTransaction, handleGetAllPaymentTransaction, handleAddPaymentTransaction, handleFindPaymentTransaction, handleEditPaymentTransaction, handleDeletePaymentTransaction };
