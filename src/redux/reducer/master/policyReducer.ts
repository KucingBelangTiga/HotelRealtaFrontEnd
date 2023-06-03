import * as ActionType from "../../constant/master/policyConstant";

const INIT_STATE = {
  policies: [],
  policy: [],
  policyPage: [],
};

const PolicyReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_POLICY_REQUEST:
      return { ...state };
    case ActionType.GET_POLICY_SUCCESS:
      return GetPolicySuccessfully(state, action);
    case ActionType.GET_PAGE_POLICY_REQUEST:
      return { ...state };
    case ActionType.GET_PAGE_POLICY_SUCCESS:
      return GetPagePolicySuccessfully(state, action);
    case ActionType.ADD_POLICY_REQUEST:
      return { ...state };
    case ActionType.ADD_POLICY_SUCCESS:
      return AddPolicySuccessfully(state, action);
    case ActionType.FIND_POLICY_REQUEST:
      return { ...state };
    case ActionType.FIND_POLICY_SUCCESS:
      return FindPolicySuccessfully(state, action);
    case ActionType.EDIT_POLICY_REQUEST:
      return { ...state };
    case ActionType.EDIT_POLICY_SUCCESS:
      return EditPolicySuccessfully(state, action);
    case ActionType.DEL_POLICY_REQUEST:
      return { ...state };
    case ActionType.DEL_POLICY_SUCCESS:
      return DelPolicySuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetPolicySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    policies: payload,
  };
};

const GetPagePolicySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    policyPage: payload,
  };
};

const AddPolicySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    policies: [...state.policies, payload],
  };
};

const FindPolicySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    policy: payload,
  };
};

const EditPolicySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelPolicySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default PolicyReduce;
