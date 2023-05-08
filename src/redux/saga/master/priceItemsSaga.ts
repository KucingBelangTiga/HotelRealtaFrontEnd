import { call, put } from "redux-saga/effects";
import PriceItems from "../../../api/master/priceItems";
import {
  GetPriceItemsSuccess,
  GetPriceItemsFailed,
  AddPriceItemsSuccess,
  AddPriceItemsFailed,
  FindPriceItemsSuccess,
  FindPriceItemsFailed,
  EditPriceItemsSuccess,
  EditPriceItemsFailed,
  DelPriceItemsSuccess,
  DelPriceItemsFailed,
} from "../../action/master/priceItemsAction";

function* handlePriceItems(): any {
  try {
    const result = yield call(PriceItems.list);
    yield put(GetPriceItemsSuccess(result));
  } catch (error) {
    yield put(GetPriceItemsFailed(error));
  }
}

function* handleAddPriceItems(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PriceItems.create, payload);
    yield put(AddPriceItemsSuccess(result.data));
  } catch (error) {
    yield put(AddPriceItemsFailed(error));
  }
}

function* findPriceItems(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PriceItems.findOne, payload);
    yield put(FindPriceItemsSuccess(result));
  } catch (error) {
    yield put(FindPriceItemsFailed(error));
  }
}

function* editPriceItems(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PriceItems.update, payload);
    yield put(EditPriceItemsSuccess(result.data));
  } catch (error) {
    yield put(EditPriceItemsFailed(error));
  }
}

function* deletePriceItems(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PriceItems.deleted, payload);
    yield put(DelPriceItemsSuccess(result.data));
  } catch (error) {
    yield put(DelPriceItemsFailed(error));
  }
}

export {
  handlePriceItems,
  handleAddPriceItems,
  findPriceItems,
  editPriceItems,
  deletePriceItems,
};
