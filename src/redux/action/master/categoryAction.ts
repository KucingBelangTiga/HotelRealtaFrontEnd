import * as ActionCategory from "../../constant/master/categoryConstant";

export const GetCategoryRequest = () => ({
  type: ActionCategory.GET_CATEGORY_REQUEST,
});

export const GetCategorySuccess = (payload: any) => ({
  type: ActionCategory.GET_CATEGORY_SUCCESS,
  payload,
});

export const GetCategoryFailed = (payload: any) => ({
  type: ActionCategory.GET_CATEGORY_FAILED,
  payload,
});

export const GetPageCategoryRequest = (payload: any) => ({
  type: ActionCategory.GET_PAGE_CATEGORY_REQUEST,
  payload,
});

export const GetPageCategorySuccess = (payload: any) => ({
  type: ActionCategory.GET_PAGE_CATEGORY_SUCCESS,
  payload,
});

export const GetPageCategoryFailed = (payload: any) => ({
  type: ActionCategory.GET_PAGE_CATEGORY_FAILED,
  payload,
});

export const AddCategoryRequest = (payload: any) => ({
  type: ActionCategory.ADD_CATEGORY_REQUEST,
  payload,
});

export const AddCategorySuccess = (payload: any) => ({
  type: ActionCategory.ADD_CATEGORY_SUCCESS,
  payload,
});

export const AddCategoryFailed = (payload: any) => ({
  type: ActionCategory.ADD_CATEGORY_FAILED,
  payload,
});

export const EditCategoryRequest = (payload: any) => ({
  type: ActionCategory.EDIT_CATEGORY_REQUEST,
  payload,
});

export const EditCategorySuccess = (payload: any) => ({
  type: ActionCategory.EDIT_CATEGORY_SUCCESS,
  payload,
});

export const EditCategoryFailed = (payload: any) => ({
  type: ActionCategory.EDIT_CATEGORY_FAILED,
  payload,
});

export const EditCategoryPolicyRequest = (payload: any) => ({
  type: ActionCategory.EDIT_CATEGORY_POLICY_REQUEST,
  payload,
});

export const EditCategoryPolicySuccess = (payload: any) => ({
  type: ActionCategory.EDIT_CATEGORY_POLICY_SUCCESS,
  payload,
});

export const EditCategoryPolicyFailed = (payload: any) => ({
  type: ActionCategory.EDIT_CATEGORY_POLICY_FAILED,
  payload,
});

export const DelCategoryRequest = (payload: any) => ({
  type: ActionCategory.DEL_CATEGORY_REQUEST,
  payload,
});

export const DelCategorySuccess = (payload: any) => ({
  type: ActionCategory.DEL_CATEGORY_SUCCESS,
  payload,
});

export const DelCategoryFailed = (payload: any) => ({
  type: ActionCategory.DEL_CATEGORY_FAILED,
  payload,
});

export const FindCategoryRequest = (payload: any) => ({
  type: ActionCategory.FIND_CATEGORY_REQUEST,
  payload,
});

export const FindCategorySuccess = (payload: any) => ({
  type: ActionCategory.FIND_CATEGORY_SUCCESS,
  payload,
});

export const FindCategoryFailed = (payload: any) => ({
  type: ActionCategory.FIND_CATEGORY_FAILED,
  payload,
});
