import { call, put } from "redux-saga/effects";
import Hotels from "../../../api/hotel/hotels";
import {
  GetAllHotelsSuccess,
  GetAllHotelsFailed,
  GetHotelsSuccess,
  GetHotelsFailed,
  AddHotelsSuccess,
  AddHotelsFailed,
  FindHotelsSuccess,
  FindHotelsFailed,
  EditHotelsSuccess,
  EditHotelsFailed,
  DelHotelsSuccess,
  DelHotelsFailed,
} from "../../action/hotel/hotelsAction";

function* handleHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.list, payload);
    yield put(GetHotelsSuccess(result));
  } catch (error) {
    yield put(GetHotelsFailed(error));
  }
}

function* handleAllHotels(): any {
  try {
    const result = yield call(Hotels.listAll);
    yield put(GetAllHotelsSuccess(result));
  } catch (error) {
    yield put(GetAllHotelsFailed(error));
  }
}

function* handleAddHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.create, payload);
    yield put(AddHotelsSuccess(result.data));
  } catch (error) {
    yield put(AddHotelsFailed(error));
  }
}

function* findHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.findOne, payload);
    yield put(FindHotelsSuccess(result));
  } catch (error) {
    yield put(FindHotelsFailed(error));
  }
}

function* editHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.update, payload);
    yield put(EditHotelsSuccess(result.data));
  } catch (error) {
    yield put(EditHotelsFailed(error));
  }
}

function* deleteHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.deleted, payload);
    yield put(DelHotelsSuccess(result.data));
  } catch (error) {
    yield put(DelHotelsFailed(error));
  }
}

export {
  handleHotels,
  handleAddHotels,
  findHotels,
  editHotels,
  deleteHotels,
  handleAllHotels,
};
