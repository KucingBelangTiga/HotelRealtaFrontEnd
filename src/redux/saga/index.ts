import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegions from "../constant/master/regionsContants";
import * as ActionCountries from "../constant/master/countriesConstant";

import {
  handleRegions,
  handleAddRegions,
  findRegions,
  editRegions,
  deleteRegions,
} from "./master/regionsSaga";
import {
  handleCountries,
  handleAddCountries,
  findCountries,
  editCountries,
  deleteCountries,
} from "./master/countriesSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionRegions.GET_REGIONS_REQUEST, handleRegions),
    takeEvery(ActionRegions.ADD_REGIONS_REQUEST, handleAddRegions),
    takeEvery(ActionRegions.FIND_REGIONS_REQUEST, findRegions),
    takeEvery(ActionRegions.EDIT_REGIONS_REQUEST, editRegions),
    takeEvery(ActionRegions.DEL_REGIONS_REQUEST, deleteRegions),

    takeEvery(ActionCountries.GET_COUNTRIES_REQUEST, handleCountries),
    takeEvery(ActionCountries.ADD_COUNTRIES_REQUEST, handleAddCountries),
    takeEvery(ActionCountries.FIND_COUNTRIES_REQUEST, findCountries),
    takeEvery(ActionCountries.EDIT_COUNTRIES_REQUEST, editCountries),
    takeEvery(ActionCountries.DEL_COUNTRIES_REQUEST, deleteCountries),
  ]);
}

export default watchAll;
