import * as ActionCity from "../../constant/master/cityConstant";

export const GetCityRequest = () => ({
  type: ActionCity.GET_CITY_REQUEST,
});

export const GetCitySuccess = (payload: any) => ({
  type: ActionCity.GET_CITY_SUCCESS,
  payload,
});

export const GetCityFailed = (payload: any) => ({
  type: ActionCity.GET_CITY_FAILED,
  payload,
});

export const GetPageCityRequest = (payload: any) => ({
  type: ActionCity.GET_PAGE_CITY_REQUEST,
  payload,
});

export const GetPageCitySuccess = (payload: any) => ({
  type: ActionCity.GET_PAGE_CITY_SUCCESS,
  payload,
});

export const GetPageCityFailed = (payload: any) => ({
  type: ActionCity.GET_PAGE_CITY_FAILED,
  payload,
});

export const AddCityRequest = (payload: any) => ({
  type: ActionCity.ADD_CITY_REQUEST,
  payload,
});

export const AddCitySuccess = (payload: any) => ({
  type: ActionCity.ADD_CITY_SUCCESS,
  payload,
});

export const AddCityFailed = (payload: any) => ({
  type: ActionCity.ADD_CITY_FAILED,
  payload,
});

export const EditCityRequest = (payload: any) => ({
  type: ActionCity.EDIT_CITY_REQUEST,
  payload,
});

export const EditCitySuccess = (payload: any) => ({
  type: ActionCity.EDIT_CITY_SUCCESS,
  payload,
});

export const EditCityFailed = (payload: any) => ({
  type: ActionCity.EDIT_CITY_FAILED,
  payload,
});

export const DelCityRequest = (payload: any) => ({
  type: ActionCity.DEL_CITY_REQUEST,
  payload,
});

export const DelCitySuccess = (payload: any) => ({
  type: ActionCity.DEL_CITY_SUCCESS,
  payload,
});

export const DelCityFailed = (payload: any) => ({
  type: ActionCity.DEL_CITY_FAILED,
  payload,
});

export const FindCityRequest = (payload: any) => ({
  type: ActionCity.FIND_CITY_REQUEST,
  payload,
});

export const FindCitySuccess = (payload: any) => ({
  type: ActionCity.FIND_CITY_SUCCESS,
  payload,
});

export const FindCityFailed = (payload: any) => ({
  type: ActionCity.FIND_CITY_FAILED,
  payload,
});
