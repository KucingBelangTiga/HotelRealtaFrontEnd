import { call, put } from "redux-saga/effects";
import EntityApi from "../../../api/payment/entityApi";
import {
  GetEntitysSuccess,
  GetEntitysFailed,
  AddEntitysSuccess,
  AddEntitysFailed,
  FindEntitysSuccess,
  FindEntitysFailed,
  EditEntitysSuccess,
  EditEntitysFailed,
  DeleteEntitysSuccess,
  DeleteEntitysFailed,
} from "../../action/payment/entityAction";

function* handleGetEntitys(): any {
  try {
    const result = yield call(EntityApi.getEntitys);
    yield put(GetEntitysSuccess(result));
  } catch (error) {
    yield put(GetEntitysFailed(error));
  }
}

function* handleAddEntitys(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(EntityApi.createEntitys, payload);
    yield put(AddEntitysSuccess(result.data));
  } catch (error) {
    yield put(AddEntitysFailed(error));
  }
}

function* handleFindEntitys(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(EntityApi.findOneEntitys, payload);
    yield put(FindEntitysSuccess(result));
  } catch (error) {
    yield put(FindEntitysFailed(error));
  }
}

function* handleEditEntitys(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(EntityApi.updateEntitys, payload);
    yield put(EditEntitysSuccess(result.data));
  } catch (error) {
    yield put(EditEntitysFailed(error));
  }
}

function* handleDeleteEntitys(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(EntityApi.deleteEntitys, payload);
    yield put(DeleteEntitysSuccess(result.data));
  } catch (error) {
    yield put(DeleteEntitysFailed(error));
  }
}

export { handleGetEntitys, handleAddEntitys, handleFindEntitys, handleEditEntitys, handleDeleteEntitys };
