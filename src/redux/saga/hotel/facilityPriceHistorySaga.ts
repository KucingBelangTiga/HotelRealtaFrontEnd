import { call, put } from "redux-saga/effects";
import FacPriceHistPriceHistory from "../../../api/hotel/facilityPriceHistory";
import {
  GetPageFacPriceHistSuccess,
  GetPageFacPriceHistFailed,
  GetFacPriceHistSuccess,
  GetFacPriceHistFailed,
  AddFacPriceHistSuccess,
  AddFacPriceHistFailed,
} from "../../action/hotel/facilityPriceHistoryAction";

function* handlePageFacPriceHist(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacPriceHistPriceHistory.listPage, payload);
    yield put(GetPageFacPriceHistSuccess(result));
  } catch (error) {
    yield put(GetPageFacPriceHistFailed(error));
  }
}

function* handleFacPriceHist(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacPriceHistPriceHistory.list, payload);
    yield put(GetFacPriceHistSuccess(result));
  } catch (error) {
    yield put(GetFacPriceHistFailed(error));
  }
}

function* handleAddFacPriceHist(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacPriceHistPriceHistory.create, payload);
    yield put(AddFacPriceHistSuccess(result.data));
  } catch (error) {
    yield put(AddFacPriceHistFailed(error));
  }
}

export { handleFacPriceHist, handleAddFacPriceHist, handlePageFacPriceHist };
