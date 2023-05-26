import * as ActionTypeUserAccount from "../../constant/payment/userAccountConstant";

const init_state = {
  currAccountSource: [],
  currAccountTarget: [],
  userAccounts: [],
  userAccount: [],
};

const UserAccountReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeUserAccount.GET_USERACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.GET_USERACCOUNT_SUCCESS:
      return GetUserAccount(state, action);
    case ActionTypeUserAccount.GET_CURACCOUNT_SOURCE_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.GET_CURACCOUNT_SOURCE_SUCCESS:
      return GetCurrAccountSource(state, action);
    case ActionTypeUserAccount.GET_CURACCOUNT_TARGET_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.GET_CURACCOUNT_TARGET_SUCCESS:
      return GetCurrAccountTarget(state, action);
    case ActionTypeUserAccount.ADD_USERACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.ADD_USERACCOUNT_SUCCESS:
      return AddUserAccount(state, action);
    case ActionTypeUserAccount.FIND_USERACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.FIND_USERACCOUNT_SUCCESS:
      return FindUserAccount(state, action);
    case ActionTypeUserAccount.EDIT_USERACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.EDIT_USERACCOUNT_SUCCESS:
      return EditUserAccount(state, action);
    case ActionTypeUserAccount.DEL_USERACCOUNT_REQUEST:
      return { ...state };
    case ActionTypeUserAccount.DEL_USERACCOUNT_SUCCESS:
      return DeleteUserAccount(state, action);
    default:
      return { ...state };
  }
};

const GetUserAccount = (state: any, action: any) => {
  return {
    ...state,
    userAccounts: action.payload,
  };
};

const GetCurrAccountSource = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    currAccountSource: payload,
  };
};

const GetCurrAccountTarget = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    currAccountTarget: payload,
  };
};

const AddUserAccount = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    userAccounts: [...state.userAccounts, payload],
  };
};

const FindUserAccount = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    userAccount: payload,
  };
};

const EditUserAccount = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteUserAccount = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default UserAccountReduce;
