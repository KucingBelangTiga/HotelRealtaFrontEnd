import * as ActionHotels from "../../constant/hotel/hotelConstant";

export const GetHotelsRequest = () => ({
  type: ActionHotels.GET_HOTELS_REQUEST,
});

export const GetHotelsSuccess = (payload: any) => ({
  type: ActionHotels.GET_HOTELS_SUCCESS,
  payload,
});

export const GetHotelsFailed = (payload: any) => ({
  type: ActionHotels.GET_HOTELS_FAILED,
  payload,
});

export const AddHotelsRequest = (payload: any) => ({
  type: ActionHotels.ADD_HOTELS_REQUEST,
  payload,
});

export const AddHotelsSuccess = (payload: any) => ({
  type: ActionHotels.ADD_HOTELS_SUCCESS,
  payload,
});

export const AddHotelsFailed = (payload: any) => ({
  type: ActionHotels.ADD_HOTELS_FAILED,
  payload,
});

export const EditHotelsRequest = (payload: any) => ({
  type: ActionHotels.EDIT_HOTELS_REQUEST,
  payload,
});

export const EditHotelsSuccess = (payload: any) => ({
  type: ActionHotels.EDIT_HOTELS_SUCCESS,
  payload,
});

export const EditHotelsFailed = (payload: any) => ({
  type: ActionHotels.EDIT_HOTELS_FAILED,
  payload,
});

export const DelHotelsRequest = (payload: any) => ({
  type: ActionHotels.DEL_HOTELS_REQUEST,
  payload,
});

export const DelHotelsSuccess = (payload: any) => ({
  type: ActionHotels.DEL_HOTELS_SUCCESS,
  payload,
});

export const DelHotelsFailed = (payload: any) => ({
  type: ActionHotels.DEL_HOTELS_FAILED,
  payload,
});

export const FindHotelsRequest = (payload: any) => ({
  type: ActionHotels.FIND_HOTELS_REQUEST,
  payload,
});

export const FindHotelsSuccess = (payload: any) => ({
  type: ActionHotels.FIND_HOTELS_SUCCESS,
  payload,
});

export const FindHotelsFailed = (payload: any) => ({
  type: ActionHotels.FIND_HOTELS_FAILED,
  payload,
});
