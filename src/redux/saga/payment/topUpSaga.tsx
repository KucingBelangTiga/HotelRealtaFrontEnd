import { call, put } from "redux-saga/effects";
import TopUpApi from "../../../api/payment/topUpApi";
import { CreditAccountSuccess, CreditAccountFailed, DebitAccountSuccess, DebitAccountFailed, CreditTransactionSuccess, CreditTransactionFailed, DebitTransactionSuccess, DebitTransactionFailed } from "../../action/payment/topUpAction";

function* handleCreditAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TopUpApi.createCreditAccount, payload);
    yield put(CreditAccountSuccess(result.data));
  } catch (error) {
    yield put(CreditAccountFailed(error));
  }
}
function* handleDebitAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TopUpApi.createDebitAccount, payload);
    yield put(DebitAccountSuccess(result.data));
  } catch (error) {
    yield put(DebitAccountFailed(error));
  }
}

function* handleCreditTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TopUpApi.createCreditTransaction, payload);
    yield put(CreditTransactionSuccess(result.data));
  } catch (error) {
    yield put(CreditTransactionFailed(error));
  }
}

function* handleDebitTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TopUpApi.createDebitTransaction, payload);
    yield put(DebitTransactionSuccess(result.data));
  } catch (error) {
    yield put(DebitTransactionFailed(error));
  }
}

export { handleCreditAccount, handleDebitAccount, handleCreditTransaction, handleDebitTransaction };
