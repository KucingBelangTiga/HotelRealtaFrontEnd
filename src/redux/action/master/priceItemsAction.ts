import * as ActionPriceItems from "../../constant/master/priceItemsConstant";

export const GetPriceItemsRequest = () => ({
  type: ActionPriceItems.GET_PRICE_ITEMS_REQUEST,
});

export const GetPriceItemsSuccess = (payload: any) => ({
  type: ActionPriceItems.GET_PRICE_ITEMS_SUCCESS,
  payload,
});

export const GetPriceItemsFailed = (payload: any) => ({
  type: ActionPriceItems.GET_PRICE_ITEMS_FAILED,
  payload,
});

export const GetPagePriceItemsRequest = (payload: any) => ({
  type: ActionPriceItems.GET_PAGE_PRICE_ITEMS_REQUEST,
  payload,
});

export const GetPagePriceItemsSuccess = (payload: any) => ({
  type: ActionPriceItems.GET_PAGE_PRICE_ITEMS_SUCCESS,
  payload,
});

export const GetPagePriceItemsFailed = (payload: any) => ({
  type: ActionPriceItems.GET_PAGE_PRICE_ITEMS_FAILED,
  payload,
});

export const AddPriceItemsRequest = (payload: any) => ({
  type: ActionPriceItems.ADD_PRICE_ITEMS_REQUEST,
  payload,
});

export const AddPriceItemsSuccess = (payload: any) => ({
  type: ActionPriceItems.ADD_PRICE_ITEMS_SUCCESS,
  payload,
});

export const AddPriceItemsFailed = (payload: any) => ({
  type: ActionPriceItems.ADD_PRICE_ITEMS_FAILED,
  payload,
});

export const EditPriceItemsRequest = (payload: any) => ({
  type: ActionPriceItems.EDIT_PRICE_ITEMS_REQUEST,
  payload,
});

export const EditPriceItemsSuccess = (payload: any) => ({
  type: ActionPriceItems.EDIT_PRICE_ITEMS_SUCCESS,
  payload,
});

export const EditPriceItemsFailed = (payload: any) => ({
  type: ActionPriceItems.EDIT_PRICE_ITEMS_FAILED,
  payload,
});

export const DelPriceItemsRequest = (payload: any) => ({
  type: ActionPriceItems.DEL_PRICE_ITEMS_REQUEST,
  payload,
});

export const DelPriceItemsSuccess = (payload: any) => ({
  type: ActionPriceItems.DEL_PRICE_ITEMS_SUCCESS,
  payload,
});

export const DelPriceItemsFailed = (payload: any) => ({
  type: ActionPriceItems.DEL_PRICE_ITEMS_FAILED,
  payload,
});

export const FindPriceItemsRequest = (payload: any) => ({
  type: ActionPriceItems.FIND_PRICE_ITEMS_REQUEST,
  payload,
});

export const FindPriceItemsSuccess = (payload: any) => ({
  type: ActionPriceItems.FIND_PRICE_ITEMS_SUCCESS,
  payload,
});

export const FindPriceItemsFailed = (payload: any) => ({
  type: ActionPriceItems.FIND_PRICE_ITEMS_FAILED,
  payload,
});
