import * as ActionType from "../../constant/hotel/facilityPhotosConstant";

const INIT_STATE = {
  facilityPhotos: [],
};

const FacilityPhotosReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_FACILITY_PHOTOS_REQUEST:
      return { ...state };
    case ActionType.GET_FACILITY_PHOTOS_SUCCESS:
      return GetFacilityPhotosSuccessfully(state, action);
    case ActionType.ADD_FACILITY_PHOTOS_REQUEST:
      return { ...state };
    case ActionType.ADD_FACILITY_PHOTOS_SUCCESS:
      return AddFacilityPhotosSuccessfully(state, action);
    case ActionType.EDIT_FACILITY_PHOTOS_REQUEST:
      return { ...state };
    case ActionType.EDIT_FACILITY_PHOTOS_SUCCESS:
      return EditFacilityPhotosSuccessfully(state, action);
    case ActionType.DEL_FACILITY_PHOTOS_REQUEST:
      return { ...state };
    case ActionType.DEL_FACILITY_PHOTOS_SUCCESS:
      return DelFacilityPhotosSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetFacilityPhotosSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilityPhotos: payload,
  };
};

const AddFacilityPhotosSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilityPhotos: [...state.facilityPhotos, payload],
  };
};

const EditFacilityPhotosSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelFacilityPhotosSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default FacilityPhotosReduce;
