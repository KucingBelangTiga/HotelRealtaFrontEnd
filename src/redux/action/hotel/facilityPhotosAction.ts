import * as ActionFacilityPhotos from "../../constant/hotel/facilityPhotosConstant";

export const GetFacilityPhotosRequest = (payload: any) => ({
  type: ActionFacilityPhotos.GET_FACILITY_PHOTOS_REQUEST,
  payload,
});

export const GetFacilityPhotosSuccess = (payload: any) => ({
  type: ActionFacilityPhotos.GET_FACILITY_PHOTOS_SUCCESS,
  payload,
});

export const GetFacilityPhotosFailed = (payload: any) => ({
  type: ActionFacilityPhotos.GET_FACILITY_PHOTOS_FAILED,
  payload,
});

export const AddFacilityPhotosRequest = (payload: any) => ({
  type: ActionFacilityPhotos.ADD_FACILITY_PHOTOS_REQUEST,
  payload,
});

export const AddFacilityPhotosSuccess = (payload: any) => ({
  type: ActionFacilityPhotos.ADD_FACILITY_PHOTOS_SUCCESS,
  payload,
});

export const AddFacilityPhotosFailed = (payload: any) => ({
  type: ActionFacilityPhotos.ADD_FACILITY_PHOTOS_FAILED,
  payload,
});

export const EditFacilityPhotosRequest = (payload: any) => ({
  type: ActionFacilityPhotos.EDIT_FACILITY_PHOTOS_REQUEST,
  payload,
});

export const EditFacilityPhotosSuccess = (payload: any) => ({
  type: ActionFacilityPhotos.EDIT_FACILITY_PHOTOS_SUCCESS,
  payload,
});

export const EditFacilityPhotosFailed = (payload: any) => ({
  type: ActionFacilityPhotos.EDIT_FACILITY_PHOTOS_FAILED,
  payload,
});

export const DelFacilityPhotosRequest = (payload: any) => ({
  type: ActionFacilityPhotos.DEL_FACILITY_PHOTOS_REQUEST,
  payload,
});

export const DelFacilityPhotosSuccess = (payload: any) => ({
  type: ActionFacilityPhotos.DEL_FACILITY_PHOTOS_SUCCESS,
  payload,
});

export const DelFacilityPhotosFailed = (payload: any) => ({
  type: ActionFacilityPhotos.DEL_FACILITY_PHOTOS_FAILED,
  payload,
});
