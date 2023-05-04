import { call, put } from "redux-saga/effects";
import Regions from "../../../api/master/regions";
import {
  GetRegionsSuccess,
  GetRegionsFailed,
  AddRegionsSuccess,
  AddRegionsFailed,
  FindRegionsSuccess,
  FindRegionsFailed,
  EditRegionsSuccess,
  EditRegionsFailed,
  DelRegionsSuccess,
  DelRegionsFailed,
} from "../../action/master/regionsAction";

function* handleRegions(): any {
  try {
    const result = yield call(Regions.list);
    yield put(GetRegionsSuccess(result));
  } catch (error) {
    yield put(GetRegionsFailed(error));
  }
}

function* handleAddRegions(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Regions.create, payload);
    yield put(AddRegionsSuccess(result.data));
  } catch (error) {
    yield put(AddRegionsFailed(error));
  }
}

function* findRegions(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Regions.findOne, payload);
    yield put(FindRegionsSuccess(result));
  } catch (error) {
    yield put(FindRegionsFailed(error));
  }
}

function* editRegions(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Regions.update, payload);
    yield put(EditRegionsSuccess(result.data));
  } catch (error) {
    yield put(EditRegionsFailed(error));
  }
}

function* deleteRegions(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Regions.deleted, payload);
    yield put(DelRegionsSuccess(result.data));
  } catch (error) {
    yield put(DelRegionsFailed(error));
  }
}

export {
  handleRegions,
  handleAddRegions,
  findRegions,
  editRegions,
  deleteRegions,
};
