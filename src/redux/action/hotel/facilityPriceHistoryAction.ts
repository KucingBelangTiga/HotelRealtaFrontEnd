import * as ActionFacPriceHist from "../../constant/hotel/facilityPriceHistoryConstant";

export const GetPageFacPriceHistRequest = (payload: any) => ({
  type: ActionFacPriceHist.GET_PAGEFACPRICEHIST_REQUEST,
  payload,
});

export const GetPageFacPriceHistSuccess = (payload: any) => ({
  type: ActionFacPriceHist.GET_PAGEFACPRICEHIST_SUCCESS,
  payload,
});

export const GetPageFacPriceHistFailed = (payload: any) => ({
  type: ActionFacPriceHist.GET_PAGEFACPRICEHIST_FAILED,
  payload,
});

export const GetFacPriceHistRequest = (payload: any) => ({
  type: ActionFacPriceHist.GET_FACPRICEHIST_REQUEST,
  payload,
});

export const GetFacPriceHistSuccess = (payload: any) => ({
  type: ActionFacPriceHist.GET_FACPRICEHIST_SUCCESS,
  payload,
});

export const GetFacPriceHistFailed = (payload: any) => ({
  type: ActionFacPriceHist.GET_FACPRICEHIST_FAILED,
  payload,
});

export const AddFacPriceHistRequest = (payload: any) => ({
  type: ActionFacPriceHist.ADD_FACPRICEHIST_REQUEST,
  payload,
});

export const AddFacPriceHistSuccess = (payload: any) => ({
  type: ActionFacPriceHist.ADD_FACPRICEHIST_SUCCESS,
  payload,
});

export const AddFacPriceHistFailed = (payload: any) => ({
  type: ActionFacPriceHist.ADD_FACPRICEHIST_FAILED,
  payload,
});
