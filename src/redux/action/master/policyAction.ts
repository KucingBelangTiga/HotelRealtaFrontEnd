import * as ActionPolicy from "../../constant/master/policyConstant";

export const GetPolicyRequest = () => ({
  type: ActionPolicy.GET_POLICY_REQUEST,
});

export const GetPolicySuccess = (payload: any) => ({
  type: ActionPolicy.GET_POLICY_SUCCESS,
  payload,
});

export const GetPolicyFailed = (payload: any) => ({
  type: ActionPolicy.GET_POLICY_FAILED,
  payload,
});

export const GetPagePolicyRequest = (payload: any) => ({
  type: ActionPolicy.GET_PAGE_POLICY_REQUEST,
  payload,
});

export const GetPagePolicySuccess = (payload: any) => ({
  type: ActionPolicy.GET_PAGE_POLICY_SUCCESS,
  payload,
});

export const GetPagePolicyFailed = (payload: any) => ({
  type: ActionPolicy.GET_PAGE_POLICY_FAILED,
  payload,
});

export const AddPolicyRequest = (payload: any) => ({
  type: ActionPolicy.ADD_POLICY_REQUEST,
  payload,
});

export const AddPolicySuccess = (payload: any) => ({
  type: ActionPolicy.ADD_POLICY_SUCCESS,
  payload,
});

export const AddPolicyFailed = (payload: any) => ({
  type: ActionPolicy.ADD_POLICY_FAILED,
  payload,
});

export const EditPolicyRequest = (payload: any) => ({
  type: ActionPolicy.EDIT_POLICY_REQUEST,
  payload,
});

export const EditPolicySuccess = (payload: any) => ({
  type: ActionPolicy.EDIT_POLICY_SUCCESS,
  payload,
});

export const EditPolicyFailed = (payload: any) => ({
  type: ActionPolicy.EDIT_POLICY_FAILED,
  payload,
});

export const DelPolicyRequest = (payload: any) => ({
  type: ActionPolicy.DEL_POLICY_REQUEST,
  payload,
});

export const DelPolicySuccess = (payload: any) => ({
  type: ActionPolicy.DEL_POLICY_SUCCESS,
  payload,
});

export const DelPolicyFailed = (payload: any) => ({
  type: ActionPolicy.DEL_POLICY_FAILED,
  payload,
});

export const FindPolicyRequest = (payload: any) => ({
  type: ActionPolicy.FIND_POLICY_REQUEST,
  payload,
});

export const FindPolicySuccess = (payload: any) => ({
  type: ActionPolicy.FIND_POLICY_SUCCESS,
  payload,
});

export const FindPolicyFailed = (payload: any) => ({
  type: ActionPolicy.FIND_POLICY_FAILED,
  payload,
});
