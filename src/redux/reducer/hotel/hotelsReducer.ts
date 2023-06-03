import * as ActionType from "../../constant/hotel/hotelConstant";

const INIT_STATE = {
  pageHotels: [],
  hotels: [],
  hotel: [],
};

const HotelsReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_HOTELS_REQUEST:
      return { ...state };
    case ActionType.GET_HOTELS_SUCCESS:
      return GetHotelsSuccessfully(state, action);
    case ActionType.GET_ALLHOTELS_REQUEST:
      return { ...state };
    case ActionType.GET_ALLHOTELS_SUCCESS:
      return GetAllHotelsSuccessfully(state, action);
    case ActionType.ADD_HOTELS_REQUEST:
      return { ...state };
    case ActionType.ADD_HOTELS_SUCCESS:
      return AddHotelsSuccessfully(state, action);
    case ActionType.FIND_HOTELS_REQUEST:
      return { ...state };
    case ActionType.FIND_HOTELS_SUCCESS:
      return FindHotelsSuccessfully(state, action);
    case ActionType.EDIT_HOTELS_REQUEST:
      return { ...state };
    case ActionType.EDIT_HOTELS_SUCCESS:
      return EditHotelsSuccessfully(state, action);
    case ActionType.DEL_HOTELS_REQUEST:
      return { ...state };
    case ActionType.DEL_HOTELS_SUCCESS:
      return DelHotelsSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetAllHotelsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    hotels: payload,
  };
};

const GetHotelsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    pageHotels: action.payload,
  };
};

const AddHotelsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    hotels: [...state.hotels, payload],
  };
};

const FindHotelsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    hotel: payload,
  };
};

const EditHotelsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelHotelsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default HotelsReduce;
