import * as ActionType from "../../constant/master/priceItemsConstant";

const INIT_STATE = {
  priceItems: [],
  priceItem: [],
  priceItemPage: [],
};

const PriceItemsReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_PRICE_ITEMS_REQUEST:
      return { ...state };
    case ActionType.GET_PRICE_ITEMS_SUCCESS:
      return GetPriceItemsSuccessfully(state, action);
    case ActionType.GET_PAGE_PRICE_ITEMS_REQUEST:
      return { ...state };
    case ActionType.GET_PAGE_PRICE_ITEMS_SUCCESS:
      return GetPagePriceItemsSuccessfully(state, action);
    case ActionType.ADD_PRICE_ITEMS_REQUEST:
      return { ...state };
    case ActionType.ADD_PRICE_ITEMS_SUCCESS:
      return AddPriceItemsSuccessfully(state, action);
    case ActionType.FIND_PRICE_ITEMS_REQUEST:
      return { ...state };
    case ActionType.FIND_PRICE_ITEMS_SUCCESS:
      return FindPriceItemsSuccessfully(state, action);
    case ActionType.EDIT_PRICE_ITEMS_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRICE_ITEMS_SUCCESS:
      return EditPriceItemsSuccessfully(state, action);
    case ActionType.DEL_PRICE_ITEMS_REQUEST:
      return { ...state };
    case ActionType.DEL_PRICE_ITEMS_SUCCESS:
      return DelPriceItemsSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetPriceItemsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    priceItems: payload,
  };
};

const GetPagePriceItemsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    priceItemPage: payload,
  };
};

const AddPriceItemsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    priceItems: [...state.priceItems, payload],
  };
};

const FindPriceItemsSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    priceItem: payload,
  };
};

const EditPriceItemsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelPriceItemsSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default PriceItemsReduce;
