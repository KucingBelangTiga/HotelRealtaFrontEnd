import { call, put } from "redux-saga/effects";
import Countries from "../../../api/master/countries";
import {
  GetCountriesSuccess,
  GetCountriesFailed,
  AddCountriesSuccess,
  AddCountriesFailed,
  FindCountriesSuccess,
  FindCountriesFailed,
  EditCountriesSuccess,
  EditCountriesFailed,
  DelCountriesSuccess,
  DelCountriesFailed,
} from "../../action/master/countriesAction";

function* handleCountries(): any {
  try {
    const result = yield call(Countries.list);
    yield put(GetCountriesSuccess(result));
  } catch (error) {
    yield put(GetCountriesFailed(error));
  }
}

function* handleAddCountries(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Countries.create, payload);
    yield put(AddCountriesSuccess(result.data));
  } catch (error) {
    yield put(AddCountriesFailed(error));
  }
}

function* findCountries(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Countries.findOne, payload);
    yield put(FindCountriesSuccess(result));
  } catch (error) {
    yield put(FindCountriesFailed(error));
  }
}

function* editCountries(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Countries.update, payload);
    yield put(EditCountriesSuccess(result.data));
  } catch (error) {
    yield put(EditCountriesFailed(error));
  }
}

function* deleteCountries(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Countries.deleted, payload);
    yield put(DelCountriesSuccess(result.data));
  } catch (error) {
    yield put(DelCountriesFailed(error));
  }
}

export {
  handleCountries,
  handleAddCountries,
  findCountries,
  editCountries,
  deleteCountries,
};
