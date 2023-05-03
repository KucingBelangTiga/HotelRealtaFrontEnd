import { takeEvery, all } from "redux-saga/effects";
import * as ActionHotels from "../constant/hotel/hotelConstant";
import * as ActionFacilities from "../constant/hotel/facilitiesConstant";
import * as ActionFacPriceHist from "../constant/hotel/facilityPriceHistoryConstant";
import * as ActionCategoryGroup from "../constant/master/categoryGroupConstant";
import * as ActionAddress from "../constant/master/addressConstant";
import * as ActionFacilityPhotos from "../constant/hotel/facilityPhotosConstant";
import {
  handleAllHotels,
  handleHotels,
  handleAddHotels,
  findHotels,
  editHotels,
  deleteHotels,
} from "./hotel/hotelsSaga";

import {
  handleFacilityPhotos,
  handleAddFacilityPhotos,
  editFacilityPhotos,
  deleteFacilityPhotos,
} from "./hotel/facilityPhotosSaga";

import {
  handleFacPriceHist,
  handleAddFacPriceHist,
} from "./hotel/facilityPriceHistorySaga";

import { handleAddress, findAddress } from "./master/addressSaga";

import { handleCategoryGroup } from "./master/categoryGroupSaga";

import {
  handleFacilities,
  handleAddFacilities,
  findFacilities,
  editFacilities,
  deleteFacilities,
} from "./hotel/facilitiesSaga";
function* watchAll() {
  yield all([
    takeEvery(ActionHotels.GETALL_HOTELS_REQUEST, handleAllHotels),
    takeEvery(ActionHotels.GET_HOTELS_REQUEST, handleHotels),
    takeEvery(ActionHotels.ADD_HOTELS_REQUEST, handleAddHotels),
    takeEvery(ActionHotels.FIND_HOTELS_REQUEST, findHotels),
    takeEvery(ActionHotels.EDIT_HOTELS_REQUEST, editHotels),
    takeEvery(ActionHotels.DEL_HOTELS_REQUEST, deleteHotels),

    takeEvery(ActionFacilities.GET_FACILITIES_REQUEST, handleFacilities),
    takeEvery(ActionFacilities.ADD_FACILITIES_REQUEST, handleAddFacilities),
    takeEvery(ActionFacilities.FIND_FACILITIES_REQUEST, findFacilities),
    takeEvery(ActionFacilities.EDIT_FACILITIES_REQUEST, editFacilities),
    takeEvery(ActionFacilities.DEL_FACILITIES_REQUEST, deleteFacilities),

    takeEvery(ActionFacPriceHist.GET_FACPRICEHIST_REQUEST, handleFacPriceHist),
    takeEvery(
      ActionFacPriceHist.ADD_FACPRICEHIST_REQUEST,
      handleAddFacPriceHist
    ),

    takeEvery(
      ActionFacilityPhotos.GET_FACILITY_PHOTOS_REQUEST,
      handleFacilityPhotos
    ),
    takeEvery(
      ActionFacilityPhotos.ADD_FACILITY_PHOTOS_REQUEST,
      handleAddFacilityPhotos
    ),
    takeEvery(
      ActionFacilityPhotos.EDIT_FACILITY_PHOTOS_REQUEST,
      editFacilityPhotos
    ),
    takeEvery(
      ActionFacilityPhotos.DEL_FACILITY_PHOTOS_REQUEST,
      deleteFacilityPhotos
    ),

    takeEvery(
      ActionCategoryGroup.GET_CATEGORY_GROUP_REQUEST,
      handleCategoryGroup
    ),

    takeEvery(ActionAddress.GET_ADDRESS_REQUEST, handleAddress),
    takeEvery(ActionAddress.FIND_ADDRESS_REQUEST, findAddress),
  ]);
}

export default watchAll;
