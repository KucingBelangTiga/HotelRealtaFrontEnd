import * as ActionFacilities from "../../constant/hotel/facilitiesConstant";

export const GetFacilitiesRequest = (payload: any) => ({
  type: ActionFacilities.GET_FACILITIES_REQUEST,
  payload,
});

export const GetFacilitiesSuccess = (payload: any) => ({
  type: ActionFacilities.GET_FACILITIES_SUCCESS,
  payload,
});

export const GetFacilitiesFailed = (payload: any) => ({
  type: ActionFacilities.GET_FACILITIES_FAILED,
  payload,
});

export const AddFacilitiesRequest = (payload: any) => ({
  type: ActionFacilities.ADD_FACILITIES_REQUEST,
  payload,
});

export const AddFacilitiesSuccess = (payload: any) => ({
  type: ActionFacilities.ADD_FACILITIES_SUCCESS,
  payload,
});

export const AddFacilitiesFailed = (payload: any) => ({
  type: ActionFacilities.ADD_FACILITIES_FAILED,
  payload,
});

export const EditFacilitiesRequest = (payload: any) => ({
  type: ActionFacilities.EDIT_FACILITIES_REQUEST,
  payload,
});

export const EditFacilitiesSuccess = (payload: any) => ({
  type: ActionFacilities.EDIT_FACILITIES_SUCCESS,
  payload,
});

export const EditFacilitiesFailed = (payload: any) => ({
  type: ActionFacilities.EDIT_FACILITIES_FAILED,
  payload,
});

export const DelFacilitiesRequest = (payload: any) => ({
  type: ActionFacilities.DEL_FACILITIES_REQUEST,
  payload,
});

export const DelFacilitiesSuccess = (payload: any) => ({
  type: ActionFacilities.DEL_FACILITIES_SUCCESS,
  payload,
});

export const DelFacilitiesFailed = (payload: any) => ({
  type: ActionFacilities.DEL_FACILITIES_FAILED,
  payload,
});

export const FindFacilitiesRequest = (payload: any) => ({
  type: ActionFacilities.FIND_FACILITIES_REQUEST,
  payload,
});

export const FindFacilitiesSuccess = (payload: any) => ({
  type: ActionFacilities.FIND_FACILITIES_SUCCESS,
  payload,
});

export const FindFacilitiesFailed = (payload: any) => ({
  type: ActionFacilities.FIND_FACILITIES_FAILED,
  payload,
});
