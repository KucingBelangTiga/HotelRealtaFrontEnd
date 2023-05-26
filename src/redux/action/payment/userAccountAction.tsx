import * as ActionUserAccount from "../../constant/payment/userAccountConstant";

export const GetUserAccountRequest = () => ({
  type: ActionUserAccount.GET_USERACCOUNT_REQUEST,
});

export const GetUserAccountSuccess = (payload: any) => ({
  type: ActionUserAccount.GET_USERACCOUNT_SUCCESS,
  payload,
});

export const GetUserAccountFailed = (payload: any) => ({
  type: ActionUserAccount.GET_USERACCOUNT_FAILED,
  payload,
});

export const GetCurrAccountSourceRequest = (payload: any) => ({
  type: ActionUserAccount.GET_CURACCOUNT_SOURCE_REQUEST,
  payload,
});

export const GetCurrAccountSourceSuccess = (payload: any) => ({
  type: ActionUserAccount.GET_CURACCOUNT_SOURCE_SUCCESS,
  payload,
});

export const GetCurrAccountSourceFailed = (payload: any) => ({
  type: ActionUserAccount.GET_CURACCOUNT_SOURCE_FAILED,
  payload,
});
export const GetCurrAccountTargetRequest = (payload: any) => ({
  type: ActionUserAccount.GET_CURACCOUNT_TARGET_REQUEST,
  payload,
});

export const GetCurrAccountTargetSuccess = (payload: any) => ({
  type: ActionUserAccount.GET_CURACCOUNT_TARGET_SUCCESS,
  payload,
});

export const GetCurrAccountTargetFailed = (payload: any) => ({
  type: ActionUserAccount.GET_CURACCOUNT_TARGET_FAILED,
  payload,
});

export const AddUserAccountRequest = (payload: any) => ({
  type: ActionUserAccount.ADD_USERACCOUNT_REQUEST,
  payload,
});

export const AddUserAccountSuccess = (payload: any) => ({
  type: ActionUserAccount.ADD_USERACCOUNT_SUCCESS,
  payload,
});

export const AddUserAccountFailed = (payload: any) => ({
  type: ActionUserAccount.ADD_USERACCOUNT_FAILED,
  payload,
});

export const FindUserAccountRequest = (payload: any) => ({
  type: ActionUserAccount.FIND_USERACCOUNT_REQUEST,
  payload,
});

export const FindUserAccountSuccess = (payload: any) => ({
  type: ActionUserAccount.FIND_USERACCOUNT_SUCCESS,
  payload,
});

export const FindUserAccountFailed = (payload: any) => ({
  type: ActionUserAccount.FIND_USERACCOUNT_FAILED,
  payload,
});

export const EditUserAccountRequest = (payload: any) => ({
  type: ActionUserAccount.EDIT_USERACCOUNT_REQUEST,
  payload,
});

export const EditUserAccountSuccess = (payload: any) => ({
  type: ActionUserAccount.EDIT_USERACCOUNT_SUCCESS,
  payload,
});

export const EditUserAccountFailed = (payload: any) => ({
  type: ActionUserAccount.EDIT_USERACCOUNT_FAILED,
  payload,
});

export const DeleteUserAccountRequest = (payload: any) => ({
  type: ActionUserAccount.DEL_USERACCOUNT_REQUEST,
  payload,
});

export const DeleteUserAccountSuccess = (payload: any) => ({
  type: ActionUserAccount.DEL_USERACCOUNT_SUCCESS,
  payload,
});

export const DeleteUserAccountFailed = (payload: any) => ({
  type: ActionUserAccount.DEL_USERACCOUNT_FAILED,
  payload,
});
