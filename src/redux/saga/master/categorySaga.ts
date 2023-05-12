import { call, put } from "redux-saga/effects";
import Category from "../../../api/master/category";
import {
  GetCategorySuccess,
  GetCategoryFailed,
  AddCategorySuccess,
  AddCategoryFailed,
  FindCategorySuccess,
  FindCategoryFailed,
  EditCategorySuccess,
  EditCategoryFailed,
  EditCategoryPolicySuccess,
  EditCategoryPolicyFailed,
  DelCategorySuccess,
  DelCategoryFailed,
} from "../../action/master/categoryAction";

function* handleCategory(): any {
  try {
    const result = yield call(Category.list);
    yield put(GetCategorySuccess(result));
  } catch (error) {
    yield put(GetCategoryFailed(error));
  }
}

function* handleAddCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Category.create, payload);
    yield put(AddCategorySuccess(result.data));
  } catch (error) {
    yield put(AddCategoryFailed(error));
  }
}

function* findCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Category.findOne, payload);
    yield put(FindCategorySuccess(result));
  } catch (error) {
    yield put(FindCategoryFailed(error));
  }
}

function* editCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Category.update, payload);
    yield put(EditCategorySuccess(result.data));
  } catch (error) {
    yield put(EditCategoryFailed(error));
  }
}

function* editCategoryPolicy(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Category.updatePolicy, payload);
    yield put(EditCategoryPolicySuccess(result.data));
  } catch (error) {
    yield put(EditCategoryPolicyFailed(error));
  }
}

function* deleteCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Category.deleted, payload);
    yield put(DelCategorySuccess(result.data));
  } catch (error) {
    yield put(DelCategoryFailed(error));
  }
}

export {
  handleCategory,
  handleAddCategory,
  findCategory,
  editCategory,
  editCategoryPolicy,
  deleteCategory,
};
