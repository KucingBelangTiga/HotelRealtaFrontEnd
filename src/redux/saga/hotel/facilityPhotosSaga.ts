import { call, put } from "redux-saga/effects";
import FacilityPhotos from "../../../api/hotel/facilityPhotos";
import {
  GetFacilityPhotosSuccess,
  GetFacilityPhotosFailed,
  AddFacilityPhotosSuccess,
  AddFacilityPhotosFailed,
  EditFacilityPhotosSuccess,
  EditFacilityPhotosFailed,
  DelFacilityPhotosSuccess,
  DelFacilityPhotosFailed,
} from "../../action/hotel/facilityPhotosAction";

function* handleFacilityPhotos(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhotos.list, payload);
    yield put(GetFacilityPhotosSuccess(result));
  } catch (error) {
    yield put(GetFacilityPhotosFailed(error));
  }
}

function* handleAddFacilityPhotos(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhotos.create, payload);
    yield put(AddFacilityPhotosSuccess(result.data));
  } catch (error) {
    yield put(AddFacilityPhotosFailed(error));
  }
}

function* editFacilityPhotos(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhotos.update, payload);
    yield put(EditFacilityPhotosSuccess(result.data));
  } catch (error) {
    yield put(EditFacilityPhotosFailed(error));
  }
}

function* deleteFacilityPhotos(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhotos.deleted, payload);
    yield put(DelFacilityPhotosSuccess(result.data));
  } catch (error) {
    yield put(DelFacilityPhotosFailed(error));
  }
}

export {
  handleFacilityPhotos,
  handleAddFacilityPhotos,
  editFacilityPhotos,
  deleteFacilityPhotos,
};
