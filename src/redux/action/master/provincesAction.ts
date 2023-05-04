import * as ActionProvinces from "../../constant/master/provincesConstants";

export const GetProvincesRequest = () => ({
  type: ActionProvinces.GET_PROVINCES_REQUEST,
});

export const GetProvincesSuccess = (payload: any) => ({
  type: ActionProvinces.GET_PROVINCES_SUCCESS,
  payload,
});

export const GetProvincesFailed = (payload: any) => ({
  type: ActionProvinces.GET_PROVINCES_FAILED,
  payload,
});

export const AddProvincesRequest = (payload: any) => ({
  type: ActionProvinces.ADD_PROVINCES_REQUEST,
  payload,
});

export const AddProvincesSuccess = (payload: any) => ({
  type: ActionProvinces.ADD_PROVINCES_SUCCESS,
  payload,
});

export const AddProvincesFailed = (payload: any) => ({
  type: ActionProvinces.ADD_PROVINCES_FAILED,
  payload,
});

export const EditProvincesRequest = (payload: any) => ({
  type: ActionProvinces.EDIT_PROVINCES_REQUEST,
  payload,
});

export const EditProvincesSuccess = (payload: any) => ({
  type: ActionProvinces.EDIT_PROVINCES_SUCCESS,
  payload,
});

export const EditProvincesFailed = (payload: any) => ({
  type: ActionProvinces.EDIT_PROVINCES_FAILED,
  payload,
});

export const DelProvincesRequest = (payload: any) => ({
  type: ActionProvinces.DEL_PROVINCES_REQUEST,
  payload,
});

export const DelProvincesSuccess = (payload: any) => ({
  type: ActionProvinces.DEL_PROVINCES_SUCCESS,
  payload,
});

export const DelProvincesFailed = (payload: any) => ({
  type: ActionProvinces.DEL_PROVINCES_FAILED,
  payload,
});

export const FindProvincesRequest = (payload: any) => ({
  type: ActionProvinces.FIND_PROVINCES_REQUEST,
  payload,
});

export const FindProvincesSuccess = (payload: any) => ({
  type: ActionProvinces.FIND_PROVINCES_SUCCESS,
  payload,
});

export const FindProvincesFailed = (payload: any) => ({
  type: ActionProvinces.FIND_PROVINCES_FAILED,
  payload,
});
