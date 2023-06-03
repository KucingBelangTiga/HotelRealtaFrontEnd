import * as ActionType from "../../constant/master/regionsContants";

const INIT_STATE = {
  regions: [],
  region: [],
  regionPage: [],
};

const RegionsReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_REGIONS_REQUEST:
      return { ...state };
    case ActionType.GET_REGIONS_SUCCESS:
      return GetRegionsSuccessfully(state, action);
    case ActionType.GET_PAGE_REGIONS_REQUEST:
      return { ...state };
    case ActionType.GET_PAGE_REGIONS_SUCCESS:
      return GetPageRegionsSuccessfully(state, action);
    case ActionType.ADD_REGIONS_REQUEST:
      return { ...state };
    case ActionType.ADD_REGIONS_SUCCESS:
      return AddRegionsSuccessfully(state, action);
    case ActionType.FIND_REGIONS_REQUEST:
      return { ...state };
    case ActionType.FIND_REGIONS_SUCCESS:
      return FindRegionsSuccessfully(state, action);
    case ActionType.EDIT_REGIONS_REQUEST:
      return { ...state };
    case ActionType.EDIT_REGIONS_SUCCESS:
      return EditRegionsSuccessfully(state, action);
    case ActionType.DEL_REGIONS_REQUEST:
      return { ...state };
    case ActionType.DEL_REGIONS_SUCCESS:
      return DelRegionsSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetRegionsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regions: payload,
  };
};

const GetPageRegionsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regionPage: payload,
  };
};

const AddRegionsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regions: [...state.regions, payload],
  };
};

const FindRegionsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    region: payload,
  };
};

const EditRegionsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelRegionsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default RegionsReduce;
