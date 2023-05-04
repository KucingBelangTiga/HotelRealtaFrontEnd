import { call, put } from "redux-saga/effects";
import Provinces from "../../../api/master/provinces";
import {
  GetProvincesSuccess,
  GetProvincesFailed,
  AddProvincesSuccess,
  AddProvincesFailed,
  FindProvincesSuccess,
  FindProvincesFailed,
  EditProvincesSuccess,
  EditProvincesFailed,
  DelProvincesSuccess,
  DelProvincesFailed,
} from "../../action/master/provincesAction";

function* handleProvinces(): any {
  try {
    const result = yield call(Provinces.list);
    yield put(GetProvincesSuccess(result));
  } catch (error) {
    yield put(GetProvincesFailed(error));
  }
}

function* handleAddProvinces(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Provinces.create, payload);
    yield put(AddProvincesSuccess(result.data));
  } catch (error) {
    yield put(AddProvincesFailed(error));
  }
}

function* findProvinces(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Provinces.findOne, payload);
    yield put(FindProvincesSuccess(result));
  } catch (error) {
    yield put(FindProvincesFailed(error));
  }
}

function* editProvinces(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Provinces.update, payload);
    yield put(EditProvincesSuccess(result.data));
  } catch (error) {
    yield put(EditProvincesFailed(error));
  }
}

function* deleteProvinces(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Provinces.deleted, payload);
    yield put(DelProvincesSuccess(result.data));
  } catch (error) {
    yield put(DelProvincesFailed(error));
  }
}

export {
  handleProvinces,
  handleAddProvinces,
  findProvinces,
  editProvinces,
  deleteProvinces,
};
