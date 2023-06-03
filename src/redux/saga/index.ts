import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegions from "../constant/master/regionsContants";
import * as ActionCountries from "../constant/master/countriesConstant";
import * as ActionProvinces from "../constant/master/provincesConstants";
import * as ActionCity from "../constant/master/cityConstant";
import * as ActionPolicy from "../constant/master/policyConstant";
import * as ActionPriceItems from "../constant/master/priceItemsConstant";
import * as ActionServiceTasks from "../constant/master/serviceTasksConstant";
import * as ActionCategory from "../constant/master/categoryConstant";

import {
  handleRegions,
  handlePageRegions,
  handleAddRegions,
  findRegions,
  editRegions,
  deleteRegions,
} from "./master/regionsSaga";
import {
  handleCountries,
  handlePageCountries,
  handleAddCountries,
  findCountries,
  editCountries,
  deleteCountries,
} from "./master/countriesSaga";
import {
  handleProvinces,
  handlePageProvinces,
  handleAddProvinces,
  findProvinces,
  editProvinces,
  deleteProvinces,
} from "./master/provincesSaga";
import {
  handleCity,
  handlePageCity,
  handleAddCity,
  findCity,
  editCity,
  deleteCity,
} from "./master/citySaga";
import {
  handlePolicy,
  handlePagePolicy,
  handleAddPolicy,
  findPolicy,
  editPolicy,
  deletePolicy,
} from "./master/policySaga";
import {
  handlePriceItems,
  handlePagePriceItems,
  handleAddPriceItems,
  findPriceItems,
  editPriceItems,
  deletePriceItems,
} from "./master/priceItemsSaga";
import {
  handleServiceTasks,
  handlePageServiceTasks,
  handleAddServiceTasks,
  findServiceTasks,
  editServiceTasks,
  deleteServiceTasks,
} from "./master/serviceTasksSaga";
import {
  handleCategory,
  handlePageCategory,
  handleAddCategory,
  findCategory,
  editCategory,
  editCategoryPolicy,
  deleteCategory,
} from "./master/categorySaga";

function* watchAll() {
  yield all([
    takeEvery(ActionRegions.GET_REGIONS_REQUEST, handleRegions),
    takeEvery(ActionRegions.GET_PAGE_REGIONS_REQUEST, handlePageRegions),
    takeEvery(ActionRegions.ADD_REGIONS_REQUEST, handleAddRegions),
    takeEvery(ActionRegions.FIND_REGIONS_REQUEST, findRegions),
    takeEvery(ActionRegions.EDIT_REGIONS_REQUEST, editRegions),
    takeEvery(ActionRegions.DEL_REGIONS_REQUEST, deleteRegions),

    takeEvery(ActionCountries.GET_COUNTRIES_REQUEST, handleCountries),
    takeEvery(ActionCountries.GET_PAGE_COUNTRIES_REQUEST, handlePageCountries),
    takeEvery(ActionCountries.ADD_COUNTRIES_REQUEST, handleAddCountries),
    takeEvery(ActionCountries.FIND_COUNTRIES_REQUEST, findCountries),
    takeEvery(ActionCountries.EDIT_COUNTRIES_REQUEST, editCountries),
    takeEvery(ActionCountries.DEL_COUNTRIES_REQUEST, deleteCountries),

    takeEvery(ActionProvinces.GET_PROVINCES_REQUEST, handleProvinces),
    takeEvery(ActionProvinces.GET_PAGE_PROVINCES_REQUEST, handlePageProvinces),
    takeEvery(ActionProvinces.ADD_PROVINCES_REQUEST, handleAddProvinces),
    takeEvery(ActionProvinces.FIND_PROVINCES_REQUEST, findProvinces),
    takeEvery(ActionProvinces.EDIT_PROVINCES_REQUEST, editProvinces),
    takeEvery(ActionProvinces.DEL_PROVINCES_REQUEST, deleteProvinces),

    takeEvery(ActionCity.GET_CITY_REQUEST, handleCity),
    takeEvery(ActionCity.GET_PAGE_CITY_REQUEST, handlePageCity),
    takeEvery(ActionCity.ADD_CITY_REQUEST, handleAddCity),
    takeEvery(ActionCity.FIND_CITY_REQUEST, findCity),
    takeEvery(ActionCity.EDIT_CITY_REQUEST, editCity),
    takeEvery(ActionCity.DEL_CITY_REQUEST, deleteCity),

    takeEvery(ActionPolicy.GET_POLICY_REQUEST, handlePolicy),
    takeEvery(ActionPolicy.GET_PAGE_POLICY_REQUEST, handlePagePolicy),
    takeEvery(ActionPolicy.ADD_POLICY_REQUEST, handleAddPolicy),
    takeEvery(ActionPolicy.FIND_POLICY_REQUEST, findPolicy),
    takeEvery(ActionPolicy.EDIT_POLICY_REQUEST, editPolicy),
    takeEvery(ActionPolicy.DEL_POLICY_REQUEST, deletePolicy),

    takeEvery(ActionPriceItems.GET_PRICE_ITEMS_REQUEST, handlePriceItems),
    takeEvery(
      ActionPriceItems.GET_PAGE_PRICE_ITEMS_REQUEST,
      handlePagePriceItems
    ),
    takeEvery(ActionPriceItems.ADD_PRICE_ITEMS_REQUEST, handleAddPriceItems),
    takeEvery(ActionPriceItems.FIND_PRICE_ITEMS_REQUEST, findPriceItems),
    takeEvery(ActionPriceItems.EDIT_PRICE_ITEMS_REQUEST, editPriceItems),
    takeEvery(ActionPriceItems.DEL_PRICE_ITEMS_REQUEST, deletePriceItems),

    takeEvery(ActionServiceTasks.GET_SERVICE_TASKS_REQUEST, handleServiceTasks),
    takeEvery(
      ActionServiceTasks.GET_PAGE_SERVICE_TASKS_REQUEST,
      handlePageServiceTasks
    ),
    takeEvery(
      ActionServiceTasks.ADD_SERVICE_TASKS_REQUEST,
      handleAddServiceTasks
    ),
    takeEvery(ActionServiceTasks.FIND_SERVICE_TASKS_REQUEST, findServiceTasks),
    takeEvery(ActionServiceTasks.EDIT_SERVICE_TASKS_REQUEST, editServiceTasks),
    takeEvery(ActionServiceTasks.DEL_SERVICE_TASKS_REQUEST, deleteServiceTasks),

    takeEvery(ActionCategory.GET_CATEGORY_REQUEST, handleCategory),
    takeEvery(ActionCategory.GET_PAGE_CATEGORY_REQUEST, handlePageCategory),
    takeEvery(ActionCategory.ADD_CATEGORY_REQUEST, handleAddCategory),
    takeEvery(ActionCategory.FIND_CATEGORY_REQUEST, findCategory),
    takeEvery(ActionCategory.EDIT_CATEGORY_REQUEST, editCategory),
    takeEvery(ActionCategory.EDIT_CATEGORY_POLICY_REQUEST, editCategoryPolicy),
    takeEvery(ActionCategory.DEL_CATEGORY_REQUEST, deleteCategory),
  ]);
}

export default watchAll;
