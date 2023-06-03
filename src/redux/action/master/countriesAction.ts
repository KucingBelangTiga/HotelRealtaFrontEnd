import * as ActionCountries from "../../constant/master/countriesConstant";

export const GetCountriesRequest = () => ({
  type: ActionCountries.GET_COUNTRIES_REQUEST,
});

export const GetCountriesSuccess = (payload: any) => ({
  type: ActionCountries.GET_COUNTRIES_SUCCESS,
  payload,
});

export const GetCountriesFailed = (payload: any) => ({
  type: ActionCountries.GET_COUNTRIES_FAILED,
  payload,
});

export const GetPageCountriesRequest = (payload: any) => ({
  type: ActionCountries.GET_PAGE_COUNTRIES_REQUEST,
  payload,
});

export const GetPageCountriesSuccess = (payload: any) => ({
  type: ActionCountries.GET_PAGE_COUNTRIES_SUCCESS,
  payload,
});

export const GetPageCountriesFailed = (payload: any) => ({
  type: ActionCountries.GET_PAGE_COUNTRIES_FAILED,
  payload,
});

export const AddCountriesRequest = (payload: any) => ({
  type: ActionCountries.ADD_COUNTRIES_REQUEST,
  payload,
});

export const AddCountriesSuccess = (payload: any) => ({
  type: ActionCountries.ADD_COUNTRIES_SUCCESS,
  payload,
});

export const AddCountriesFailed = (payload: any) => ({
  type: ActionCountries.ADD_COUNTRIES_FAILED,
  payload,
});

export const EditCountriesRequest = (payload: any) => ({
  type: ActionCountries.EDIT_COUNTRIES_REQUEST,
  payload,
});

export const EditCountriesSuccess = (payload: any) => ({
  type: ActionCountries.EDIT_COUNTRIES_SUCCESS,
  payload,
});

export const EditCountriesFailed = (payload: any) => ({
  type: ActionCountries.EDIT_COUNTRIES_FAILED,
  payload,
});

export const DelCountriesRequest = (payload: any) => ({
  type: ActionCountries.DEL_COUNTRIES_REQUEST,
  payload,
});

export const DelCountriesSuccess = (payload: any) => ({
  type: ActionCountries.DEL_COUNTRIES_SUCCESS,
  payload,
});

export const DelCountriesFailed = (payload: any) => ({
  type: ActionCountries.DEL_COUNTRIES_FAILED,
  payload,
});

export const FindCountriesRequest = (payload: any) => ({
  type: ActionCountries.FIND_COUNTRIES_REQUEST,
  payload,
});

export const FindCountriesSuccess = (payload: any) => ({
  type: ActionCountries.FIND_COUNTRIES_SUCCESS,
  payload,
});

export const FindCountriesFailed = (payload: any) => ({
  type: ActionCountries.FIND_COUNTRIES_FAILED,
  payload,
});
