import * as ActionType from "../../constant/master/countriesConstant";

const INIT_STATE = {
  countries: [],
  country: [],
};

const CountriesReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.GET_COUNTRIES_SUCCESS:
      return GetCountriesSuccessfully(state, action);
    case ActionType.ADD_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.ADD_COUNTRIES_SUCCESS:
      return AddCountriesSuccessfully(state, action);
    case ActionType.FIND_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.FIND_COUNTRIES_SUCCESS:
      return FindCountriesSuccessfully(state, action);
    case ActionType.EDIT_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.EDIT_COUNTRIES_SUCCESS:
      return EditCountriesSuccessfully(state, action);
    case ActionType.DEL_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.DEL_COUNTRIES_SUCCESS:
      return DelCountriesSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetCountriesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    countries: payload,
  };
};

const AddCountriesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    countries: [...state.countries, payload],
  };
};

const FindCountriesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    country: payload,
  };
};

const EditCountriesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelCountriesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default CountriesReduce;
