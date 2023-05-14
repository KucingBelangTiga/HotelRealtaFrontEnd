import * as ActionType from "../../constant/master/addressConstant";

const INIT_STATE = {
  addresses: [],
  address: [],
};

const AddressReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_SUCCESS:
      return GetAddressSuccessfully(state, action);
    case ActionType.FIND_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.FIND_ADDRESS_SUCCESS:
      return FindAddressSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetAddressSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    addresses: action.payload,
  };
};

const FindAddressSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    address: payload,
  };
};

export default AddressReduce;
