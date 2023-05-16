import { call, put } from "redux-saga/effects";
import BankApi from "../../../api/payment/bankApi";
import { GetBankSuccess, GetBankFailed, AddBankSuccess, AddBankFailed, FindBankSuccess, FindBankFailed, EditBankSuccess, EditBankFailed, DeleteBankSuccess, DeleteBankFailed } from "../../action/payment/bankAction";

function* handleGetBank(): any {
  try {
    const result = yield call(BankApi.getBanks);
    yield put(GetBankSuccess(result));
  } catch (error) {
    yield put(GetBankFailed(error));
  }
}

function* handleAddBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.createBank, payload);
    yield put(AddBankSuccess(result.data));
  } catch (error) {
    yield put(AddBankFailed(error));
  }
}

function* handleFindBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.findOneBank, payload);
    yield put(FindBankSuccess(result));
  } catch (error) {
    yield put(FindBankFailed(error));
  }
}

function* handleEditBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.updateBank, payload);
    yield put(EditBankSuccess(result.data));
  } catch (error) {
    yield put(EditBankFailed(error));
  }
}

function* handleDeleteBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.deleteBank, payload);
    yield put(DeleteBankSuccess(result.data));
  } catch (error) {
    yield put(DeleteBankFailed(error));
  }
}

export { handleGetBank, handleAddBank, handleFindBank, handleEditBank, handleDeleteBank };
