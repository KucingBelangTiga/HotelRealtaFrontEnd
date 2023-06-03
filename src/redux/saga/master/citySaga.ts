import { call, put } from "redux-saga/effects";
import City from "../../../api/master/city";
import {
  GetCitySuccess,
  GetCityFailed,
  GetPageCitySuccess,
  GetPageCityFailed,
  AddCitySuccess,
  AddCityFailed,
  FindCitySuccess,
  FindCityFailed,
  EditCitySuccess,
  EditCityFailed,
  DelCitySuccess,
  DelCityFailed,
} from "../../action/master/cityAction";

function* handleCity(): any {
  try {
    const result = yield call(City.list);
    yield put(GetCitySuccess(result));
  } catch (error) {
    yield put(GetCityFailed(error));
  }
}

function* handlePageCity(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(City.listPage, payload);
    yield put(GetPageCitySuccess(result));
  } catch (error) {
    yield put(GetPageCityFailed(error));
  }
}

function* handleAddCity(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(City.create, payload);
    yield put(AddCitySuccess(result.data));
  } catch (error) {
    yield put(AddCityFailed(error));
  }
}

function* findCity(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(City.findOne, payload);
    yield put(FindCitySuccess(result));
  } catch (error) {
    yield put(FindCityFailed(error));
  }
}

function* editCity(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(City.update, payload);
    yield put(EditCitySuccess(result.data));
  } catch (error) {
    yield put(EditCityFailed(error));
  }
}

function* deleteCity(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(City.deleted, payload);
    yield put(DelCitySuccess(result.data));
  } catch (error) {
    yield put(DelCityFailed(error));
  }
}

export {
  handleCity,
  handlePageCity,
  handleAddCity,
  findCity,
  editCity,
  deleteCity,
};
