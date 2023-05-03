import * as ActionAddress from "../../constant/master/addressConstant";

export const GetAddressRequest = () => ({
  type: ActionAddress.GET_ADDRESS_REQUEST,
});

export const GetAddressSuccess = (payload: any) => ({
  type: ActionAddress.GET_ADDRESS_SUCCESS,
  payload,
});

export const GetAddressFailed = (payload: any) => ({
  type: ActionAddress.GET_ADDRESS_FAILED,
  payload,
});

export const FindAddressRequest = (payload: any) => ({
  type: ActionAddress.FIND_ADDRESS_REQUEST,
  payload,
});

export const FindAddressSuccess = (payload: any) => ({
  type: ActionAddress.FIND_ADDRESS_SUCCESS,
  payload,
});

export const FindAddressFailed = (payload: any) => ({
  type: ActionAddress.FIND_ADDRESS_FAILED,
  payload,
});
