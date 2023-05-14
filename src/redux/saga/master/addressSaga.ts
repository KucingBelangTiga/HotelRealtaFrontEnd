import { call, put } from "redux-saga/effects";
import Address from "../../../api/master/address";
import {
  GetAddressSuccess,
  GetAddressFailed,
  FindAddressSuccess,
  FindAddressFailed,
} from "../../action/master/addressAction";

function* handleAddress(): any {
  try {
    const result = yield call(Address.list);
    yield put(GetAddressSuccess(result));
  } catch (error) {
    yield put(GetAddressFailed(error));
  }
}

function* findAddress(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Address.findOne, payload);
    yield put(FindAddressSuccess(result));
  } catch (error) {
    yield put(FindAddressFailed(error));
  }
}

export { handleAddress, findAddress };
