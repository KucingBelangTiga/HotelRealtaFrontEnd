import * as ActionType from "../../constant/master/categoryConstant";

const INIT_STATE = {
  categories: [],
  category: [],
  categoryPage: [],
};

const CategoryReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_CATEGORY_SUCCESS:
      return GetCategorySuccessfully(state, action);
    case ActionType.GET_PAGE_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_PAGE_CATEGORY_SUCCESS:
      return GetPageCategorySuccessfully(state, action);
    case ActionType.ADD_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.ADD_CATEGORY_SUCCESS:
      return AddCategorySuccessfully(state, action);
    case ActionType.FIND_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.FIND_CATEGORY_SUCCESS:
      return FindCategorySuccessfully(state, action);
    case ActionType.EDIT_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.EDIT_CATEGORY_SUCCESS:
      return EditCategorySuccessfully(state, action);
    case ActionType.EDIT_CATEGORY_POLICY_REQUEST:
      return { ...state };
    case ActionType.EDIT_CATEGORY_POLICY_SUCCESS:
      return EditCategoryPolicySuccessfully(state, action);
    case ActionType.DEL_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.DEL_CATEGORY_SUCCESS:
      return DelCategorySuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    categories: payload,
  };
};

const GetPageCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    categoryPage: payload,
  };
};

const AddCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    categories: [...state.categories, payload],
  };
};

const FindCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    category: payload,
  };
};

const EditCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const EditCategoryPolicySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default CategoryReduce;
