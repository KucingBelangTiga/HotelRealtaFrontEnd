import * as ActionBank from "../../constant/payment/bankConstant";

export const GetAllBankRequest = (payload: any) => ({
  type: ActionBank.GET_ALL_BANK_REQUEST,
  payload,
});

export const GetAllBankSuccess = (payload: any) => ({
  type: ActionBank.GET_ALL_BANK_SUCCESS,
  payload,
});

export const GetAllBankFailed = (payload: any) => ({
  type: ActionBank.GET_ALL_BANK_FAILED,
  payload,
});

export const GetBankRequest = () => ({
  type: ActionBank.GET_BANK_REQUEST,
});

export const GetBankSuccess = (payload: any) => ({
  type: ActionBank.GET_BANK_SUCCESS,
  payload,
});

export const GetBankFailed = (payload: any) => ({
  type: ActionBank.GET_BANK_FAILED,
  payload,
});

export const AddBankRequest = (payload: any) => ({
  type: ActionBank.ADD_BANK_REQUEST,
  payload,
});

export const AddBankSuccess = (payload: any) => ({
  type: ActionBank.ADD_BANK_SUCCESS,
  payload,
});

export const AddBankFailed = (payload: any) => ({
  type: ActionBank.ADD_BANK_FAILED,
  payload,
});

export const FindBankRequest = (payload: any) => ({
  type: ActionBank.FIND_BANK_REQUEST,
  payload,
});

export const FindBankSuccess = (payload: any) => ({
  type: ActionBank.FIND_BANK_SUCCESS,
  payload,
});

export const FindBankFailed = (payload: any) => ({
  type: ActionBank.FIND_BANK_FAILED,
  payload,
});

export const EditBankRequest = (payload: any) => ({
  type: ActionBank.EDIT_BANK_REQUEST,
  payload,
});

export const EditBankSuccess = (payload: any) => ({
  type: ActionBank.EDIT_BANK_SUCCESS,
  payload,
});

export const EditBankFailed = (payload: any) => ({
  type: ActionBank.EDIT_BANK_FAILED,
  payload,
});

export const DeleteBankRequest = (payload: any) => ({
  type: ActionBank.DEL_BANK_REQUEST,
  payload,
});

export const DeleteBankSuccess = (payload: any) => ({
  type: ActionBank.DEL_BANK_SUCCESS,
  payload,
});

export const DeleteBankFailed = (payload: any) => ({
  type: ActionBank.DEL_BANK_FAILED,
  payload,
});
