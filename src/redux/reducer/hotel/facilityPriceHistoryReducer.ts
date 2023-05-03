import * as ActionType from "../../constant/hotel/facilityPriceHistoryConstant";

const INIT_STATE = {
  facPriceHist: [],
};

const FacPriceHistReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_FACPRICEHIST_REQUEST:
      return { ...state };
    case ActionType.GET_FACPRICEHIST_SUCCESS:
      return GetFacPriceHistSuccessfully(state, action);
    case ActionType.ADD_FACPRICEHIST_REQUEST:
      return { ...state };
    case ActionType.ADD_FACPRICEHIST_SUCCESS:
      return AddFacPriceHistSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetFacPriceHistSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facPriceHist: payload,
  };
};

const AddFacPriceHistSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facPriceHist: [...state.facPriceHist, payload],
  };
};

export default FacPriceHistReduce;
