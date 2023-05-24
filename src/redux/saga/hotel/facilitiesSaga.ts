import { call, put } from "redux-saga/effects";
import Facilities from "../../../api/hotel/facilities";
import {
  GetAllFacilitiesSuccess,
  GetAllFacilitiesFailed,
  GetFacilitiesSuccess,
  GetFacilitiesFailed,
  AddFacilitiesSuccess,
  AddFacilitiesFailed,
  FindFacilitiesSuccess,
  FindFacilitiesFailed,
  EditFacilitiesSuccess,
  EditFacilitiesFailed,
  DelFacilitiesSuccess,
  DelFacilitiesFailed,
} from "../../action/hotel/facilitiesAction";

function* handleAllFacilities(): any {
  try {
    const result = yield call(Facilities.listAll);
    yield put(GetAllFacilitiesSuccess(result));
  } catch (error) {
    yield put(GetAllFacilitiesFailed(error));
  }
}

function* handleFacilities(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Facilities.list, payload);
    yield put(GetFacilitiesSuccess(result));
  } catch (error) {
    yield put(GetFacilitiesFailed(error));
  }
}

function* handleAddFacilities(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Facilities.create, payload);
    yield put(AddFacilitiesSuccess(result.data));
  } catch (error) {
    yield put(AddFacilitiesFailed(error));
  }
}

function* findFacilities(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Facilities.findOne, payload);
    yield put(FindFacilitiesSuccess(result));
  } catch (error) {
    yield put(FindFacilitiesFailed(error));
  }
}

function* editFacilities(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Facilities.update, payload);
    yield put(EditFacilitiesSuccess(result.data));
  } catch (error) {
    yield put(EditFacilitiesFailed(error));
  }
}

function* deleteFacilities(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Facilities.deleted, payload);
    yield put(DelFacilitiesSuccess(result.data));
  } catch (error) {
    yield put(DelFacilitiesFailed(error));
  }
}

export {
  handleAllFacilities,
  handleFacilities,
  handleAddFacilities,
  findFacilities,
  editFacilities,
  deleteFacilities,
};
