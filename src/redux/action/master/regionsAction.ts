import * as ActionRegions from "../../constant/master/regionsContants";

export const GetRegionsRequest = () => ({
  type: ActionRegions.GET_REGIONS_REQUEST,
});

export const GetRegionsSuccess = (payload: any) => ({
  type: ActionRegions.GET_REGIONS_SUCCESS,
  payload,
});

export const GetRegionsFailed = (payload: any) => ({
  type: ActionRegions.GET_REGIONS_FAILED,
  payload,
});

export const AddRegionsRequest = (payload: any) => ({
  type: ActionRegions.ADD_REGIONS_REQUEST,
  payload,
});

export const AddRegionsSuccess = (payload: any) => ({
  type: ActionRegions.ADD_REGIONS_SUCCESS,
  payload,
});

export const AddRegionsFailed = (payload: any) => ({
  type: ActionRegions.ADD_REGIONS_FAILED,
  payload,
});

export const EditRegionsRequest = (payload: any) => ({
  type: ActionRegions.EDIT_REGIONS_REQUEST,
  payload,
});

export const EditRegionsSuccess = (payload: any) => ({
  type: ActionRegions.EDIT_REGIONS_SUCCESS,
  payload,
});

export const EditRegionsFailed = (payload: any) => ({
  type: ActionRegions.EDIT_REGIONS_FAILED,
  payload,
});

export const DelRegionsRequest = (payload: any) => ({
  type: ActionRegions.DEL_REGIONS_REQUEST,
  payload,
});

export const DelRegionsSuccess = (payload: any) => ({
  type: ActionRegions.DEL_REGIONS_SUCCESS,
  payload,
});

export const DelRegionsFailed = (payload: any) => ({
  type: ActionRegions.DEL_REGIONS_FAILED,
  payload,
});

export const FindRegionsRequest = (payload: any) => ({
  type: ActionRegions.FIND_REGIONS_REQUEST,
  payload,
});

export const FindRegionsSuccess = (payload: any) => ({
  type: ActionRegions.FIND_REGIONS_SUCCESS,
  payload,
});

export const FindRegionsFailed = (payload: any) => ({
  type: ActionRegions.FIND_REGIONS_FAILED,
  payload,
});
