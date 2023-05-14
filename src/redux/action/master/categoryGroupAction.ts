import * as ActionCategoryGroup from "../../constant/master/categoryGroupConstant";

export const GetCategoryGroupRequest = () => ({
  type: ActionCategoryGroup.GET_CATEGORY_GROUP_REQUEST,
});

export const GetCategoryGroupSuccess = (payload: any) => ({
  type: ActionCategoryGroup.GET_CATEGORY_GROUP_SUCCESS,
  payload,
});

export const GetCategoryGroupFailed = (payload: any) => ({
  type: ActionCategoryGroup.GET_CATEGORY_GROUP_FAILED,
  payload,
});
