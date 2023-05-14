import { call, put } from "redux-saga/effects";
import FacPriceHistPriceHistory from "../../../api/hotel/facilityPriceHistory";
import {
  GetFacPriceHistSuccess,
  GetFacPriceHistFailed,
  AddFacPriceHistSuccess,
  AddFacPriceHistFailed,
} from "../../action/hotel/facilityPriceHistoryAction";

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

export { handleFacPriceHist, handleAddFacPriceHist };
