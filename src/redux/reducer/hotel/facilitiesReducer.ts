import * as ActionType from "../../constant/hotel/facilitiesConstant";

const INIT_STATE = {
  facilities: [],
  facility: [],
};

const FacilitiesReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.GET_FACILITIES_SUCCESS:
      return GetFacilitiesSuccessfully(state, action);
    case ActionType.ADD_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.ADD_FACILITIES_SUCCESS:
      return AddFacilitiesSuccessfully(state, action);
    case ActionType.FIND_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.FIND_FACILITIES_SUCCESS:
      return FindFacilitiesSuccessfully(state, action);
    case ActionType.EDIT_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.EDIT_FACILITIES_SUCCESS:
      return EditFacilitiesSuccessfully(state, action);
    case ActionType.DEL_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.DEL_FACILITIES_SUCCESS:
      return DelFacilitiesSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetFacilitiesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilities: payload,
  };
};

const AddFacilitiesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilities: [...state.facilities, payload],
  };
};

const FindFacilitiesSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facility: payload,
  };
};

const EditFacilitiesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelFacilitiesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default FacilitiesReduce;
