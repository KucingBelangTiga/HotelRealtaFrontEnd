import { call, put } from "redux-saga/effects";
import CategoryGroup from "../../../api/master/categoryGroup";
import {
  GetCategoryGroupSuccess,
  GetCategoryGroupFailed,
} from "../../action/master/categoryGroupAction";

function* handleCategoryGroup(): any {
  try {
    const result = yield call(CategoryGroup.list);
    yield put(GetCategoryGroupSuccess(result));
  } catch (error) {
    yield put(GetCategoryGroupFailed(error));
  }
}

export { handleCategoryGroup };
