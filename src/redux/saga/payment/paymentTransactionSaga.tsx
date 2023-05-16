import { call, put } from "redux-saga/effects";
import PaymentTransactionApi from "../../../api/payment/paymentTransactionApi";
import {
  GetPaymentTransactionSuccess,
  GetPaymentTransactionFailed,
  AddPaymentTransactionSuccess,
  AddPaymentTransactionFailed,
  FindPaymentTransactionSuccess,
  FindPaymentTransactionFailed,
  EditPaymentTransactionSuccess,
  EditPaymentTransactionFailed,
  DeletePaymentTransactionSuccess,
  DeletePaymentTransactionFailed,
} from "../../action/payment/paymentTransactionAction";

function* handleGetPaymentTransaction(): any {
  try {
    const result = yield call(PaymentTransactionApi.getAllPaymentTransaction);
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

export { handleGetPaymentTransaction, handleAddPaymentTransaction, handleFindPaymentTransaction, handleEditPaymentTransaction, handleDeletePaymentTransaction };
