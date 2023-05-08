import { call, put } from "redux-saga/effects";
import ServiceTasks from "../../../api/master/serviceTasks";
import {
  GetServiceTasksSuccess,
  GetServiceTasksFailed,
  AddServiceTasksSuccess,
  AddServiceTasksFailed,
  FindServiceTasksSuccess,
  FindServiceTasksFailed,
  EditServiceTasksSuccess,
  EditServiceTasksFailed,
  DelServiceTasksSuccess,
  DelServiceTasksFailed,
} from "../../action/master/serviceTasksAction";

function* handleServiceTasks(): any {
  try {
    const result = yield call(ServiceTasks.list);
    yield put(GetServiceTasksSuccess(result));
  } catch (error) {
    yield put(GetServiceTasksFailed(error));
  }
}

function* handleAddServiceTasks(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ServiceTasks.create, payload);
    yield put(AddServiceTasksSuccess(result.data));
  } catch (error) {
    yield put(AddServiceTasksFailed(error));
  }
}

function* findServiceTasks(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ServiceTasks.findOne, payload);
    yield put(FindServiceTasksSuccess(result));
  } catch (error) {
    yield put(FindServiceTasksFailed(error));
  }
}

function* editServiceTasks(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ServiceTasks.update, payload);
    yield put(EditServiceTasksSuccess(result.data));
  } catch (error) {
    yield put(EditServiceTasksFailed(error));
  }
}

function* deleteServiceTasks(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ServiceTasks.deleted, payload);
    yield put(DelServiceTasksSuccess(result.data));
  } catch (error) {
    yield put(DelServiceTasksFailed(error));
  }
}

export {
  handleServiceTasks,
  handleAddServiceTasks,
  findServiceTasks,
  editServiceTasks,
  deleteServiceTasks,
};
