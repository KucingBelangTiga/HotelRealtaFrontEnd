import { call, put } from "redux-saga/effects";
import Policy from "../../../api/master/policy";
import {
  GetPolicySuccess,
  GetPolicyFailed,
  AddPolicySuccess,
  AddPolicyFailed,
  FindPolicySuccess,
  FindPolicyFailed,
  EditPolicySuccess,
  EditPolicyFailed,
  DelPolicySuccess,
  DelPolicyFailed,
} from "../../action/master/policyAction";

function* handlePolicy(): any {
  try {
    const result = yield call(Policy.list);
    yield put(GetPolicySuccess(result));
  } catch (error) {
    yield put(GetPolicyFailed(error));
  }
}

function* handleAddPolicy(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Policy.create, payload);
    yield put(AddPolicySuccess(result.data));
  } catch (error) {
    yield put(AddPolicyFailed(error));
  }
}

function* findPolicy(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Policy.findOne, payload);
    yield put(FindPolicySuccess(result));
  } catch (error) {
    yield put(FindPolicyFailed(error));
  }
}

function* editPolicy(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Policy.update, payload);
    yield put(EditPolicySuccess(result.data));
  } catch (error) {
    yield put(EditPolicyFailed(error));
  }
}

function* deletePolicy(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Policy.deleted, payload);
    yield put(DelPolicySuccess(result.data));
  } catch (error) {
    yield put(DelPolicyFailed(error));
  }
}

export { handlePolicy, handleAddPolicy, findPolicy, editPolicy, deletePolicy };
