import * as ActionTypeBank from "../../constant/payment/bankConstant";

const init_state = {
  banks: [],
  bank: [],
};

const BankReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeBank.GET_ALL_BANK_REQUEST:
      return { ...state };
    case ActionTypeBank.GET_ALL_BANK_SUCCESS:
      return GetAllBank(state, action);
    case ActionTypeBank.GET_BANK_REQUEST:
      return { ...state };
    case ActionTypeBank.GET_BANK_SUCCESS:
      return GetBank(state, action);
    case ActionTypeBank.ADD_BANK_REQUEST:
      return { ...state };
    case ActionTypeBank.ADD_BANK_SUCCESS:
      return AddBank(state, action);
    case ActionTypeBank.FIND_BANK_REQUEST:
      return { ...state };
    case ActionTypeBank.FIND_BANK_SUCCESS:
      return FindBank(state, action);
    case ActionTypeBank.EDIT_BANK_REQUEST:
      return { ...state };
    case ActionTypeBank.EDIT_BANK_SUCCESS:
      return EditBank(state, action);
    case ActionTypeBank.DEL_BANK_REQUEST:
      return { ...state };
    case ActionTypeBank.DEL_BANK_SUCCESS:
      return DeleteBank(state, action);
    default:
      return { ...state };
  }
};

const GetAllBank = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    banks: payload,
  };
};

const GetBank = (state: any, action: any) => {
  return {
    ...state,
    banks: action.payload,
  };
};

const AddBank = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    banks: [...state.banks, payload],
  };
};

const FindBank = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    bank: payload,
  };
};

const EditBank = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteBank = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default BankReduce;
