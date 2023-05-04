import * as ActionType from "../../constant/master/provincesConstants";

const INIT_STATE = {
  provinces: [],
  province: [],
};

const ProvincesReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_PROVINCES_REQUEST:
      return { ...state };
    case ActionType.GET_PROVINCES_SUCCESS:
      return GetProvincesSuccessfully(state, action);
    case ActionType.ADD_PROVINCES_REQUEST:
      return { ...state };
    case ActionType.ADD_PROVINCES_SUCCESS:
      return AddProvincesSuccessfully(state, action);
    case ActionType.FIND_PROVINCES_REQUEST:
      return { ...state };
    case ActionType.FIND_PROVINCES_SUCCESS:
      return FindProvincesSuccessfully(state, action);
    case ActionType.EDIT_PROVINCES_REQUEST:
      return { ...state };
    case ActionType.EDIT_PROVINCES_SUCCESS:
      return EditProvincesSuccessfully(state, action);
    case ActionType.DEL_PROVINCES_REQUEST:
      return { ...state };
    case ActionType.DEL_PROVINCES_SUCCESS:
      return DelProvincesSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetProvincesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    provinces: payload,
  };
};

const AddProvincesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    provinces: [...state.provinces, payload],
  };
};

const FindProvincesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    province: payload,
  };
};

const EditProvincesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelProvincesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default ProvincesReduce;
