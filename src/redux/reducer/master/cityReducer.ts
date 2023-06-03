import * as ActionType from "../../constant/master/cityConstant";

const INIT_STATE = {
  cities: [],
  city: [],
  cityPage: [],
};

const CityReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_CITY_REQUEST:
      return { ...state };
    case ActionType.GET_CITY_SUCCESS:
      return GetCitySuccessfully(state, action);
    case ActionType.GET_PAGE_CITY_REQUEST:
      return { ...state };
    case ActionType.GET_PAGE_CITY_SUCCESS:
      return GetPageCitySuccessfully(state, action);
    case ActionType.ADD_CITY_REQUEST:
      return { ...state };
    case ActionType.ADD_CITY_SUCCESS:
      return AddCitySuccessfully(state, action);
    case ActionType.FIND_CITY_REQUEST:
      return { ...state };
    case ActionType.FIND_CITY_SUCCESS:
      return FindCitySuccessfully(state, action);
    case ActionType.EDIT_CITY_REQUEST:
      return { ...state };
    case ActionType.EDIT_CITY_SUCCESS:
      return EditCitySuccessfully(state, action);
    case ActionType.DEL_CITY_REQUEST:
      return { ...state };
    case ActionType.DEL_CITY_SUCCESS:
      return DelCitySuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetCitySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    cities: payload,
  };
};

const GetPageCitySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    cityPage: payload,
  };
};

const AddCitySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    cities: [...state.cities, payload],
  };
};

const FindCitySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    city: payload,
  };
};

const EditCitySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelCitySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default CityReduce;
