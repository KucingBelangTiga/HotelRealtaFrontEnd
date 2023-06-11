import { call, put } from "redux-saga/effects";
import UserAccountApi from "../../../api/payment/userAccountApi";
import {
  GetCurrAccountSourceSuccess,
  GetCurrAccountSourceFailed,
  GetCurrAccountTargetSuccess,
  GetCurrAccountTargetFailed,
  GetAllUserAccountSuccess,
  GetAllUserAccountFailed,
  GetUserAccountSuccess,
  GetUserAccountFailed,
  AddUserAccountSuccess,
  AddUserAccountFailed,
  FindUserAccountSuccess,
  FindUserAccountFailed,
  EditUserAccountSuccess,
  EditUserAccountFailed,
  DeleteUserAccountSuccess,
  DeleteUserAccountFailed,
} from "../../action/payment/userAccountAction";

function* handleGetAllUserAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.getAllUserAccount, payload);
    yield put(GetAllUserAccountSuccess(result));
  } catch (error) {
    yield put(GetAllUserAccountFailed(error));
  }
}

function* handleGetUserAccount(): any {
  try {
    const result = yield call(UserAccountApi.getUserAccount);
    yield put(GetUserAccountSuccess(result));
  } catch (error) {
    yield put(GetUserAccountFailed(error));
  }
}

function* handleCurrAccountSource(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.findCurrAccountSource, payload);
    yield put(GetCurrAccountSourceSuccess(result));
  } catch (error) {
    yield put(GetCurrAccountSourceFailed(error));
  }
}

function* handleCurrAccountTarget(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.findCurrAccountTarget, payload);
    yield put(GetCurrAccountTargetSuccess(result));
  } catch (error) {
    yield put(GetCurrAccountTargetFailed(error));
  }
}

function* handleAddUserAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.createUserAccount, payload);
    yield put(AddUserAccountSuccess(result.data));
  } catch (error) {
    yield put(AddUserAccountFailed(error));
  }
}

function* handleFindUserAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.findOneUserAccount, payload);
    yield put(FindUserAccountSuccess(result));
  } catch (error) {
    yield put(FindUserAccountFailed(error));
  }
}

function* handleEditUserAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.updateUserAccount, payload);
    yield put(EditUserAccountSuccess(result.data));
  } catch (error) {
    yield put(EditUserAccountFailed(error));
  }
}

function* handleDeleteUserAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserAccountApi.deleteUserAccount, payload);
    yield put(DeleteUserAccountSuccess(result.data));
  } catch (error) {
    yield put(DeleteUserAccountFailed(error));
  }
}

export { handleGetAllUserAccount, handleGetUserAccount, handleCurrAccountSource, handleCurrAccountTarget, handleAddUserAccount, handleFindUserAccount, handleEditUserAccount, handleDeleteUserAccount };
