import * as ActionType from "../../constant/master/categoryGroupConstant";

const INIT_STATE = {
  categoryGroups: [],
};

const CategoryGroupReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_CATEGORY_GROUP_REQUEST:
      return { ...state };
    case ActionType.GET_CATEGORY_GROUP_SUCCESS:
      return GetCategoryGroupSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetCategoryGroupSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    categoryGroups: action.payload,
  };
};

export default CategoryGroupReduce;
