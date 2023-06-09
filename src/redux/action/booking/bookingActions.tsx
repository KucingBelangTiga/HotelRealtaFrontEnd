import * as ActionBooking from '../../constant/booking/bookingConstants'

export const GetBookingRequest = () => ({
    type: ActionBooking.GET_DATA_REQUEST
})

export const GetBookingSuccess = (payload: any) => ({
    type: ActionBooking.GET_DATA_SUCCESS,
    payload
})

export const GetBookingFailed = (payload: any) => ({
    type: ActionBooking.GET_DATA_FAILED,
    payload
})

export const GetBookingDetailRequest = () => ({
    type: ActionBooking.GET_DATA_DETAIL_REQUEST
})

export const GetBookingDetailSuccess = (payload: any) => ({
    type: ActionBooking.GET_DATA_DETAIL_SUCCESS,
    payload
})

export const GetBookingDetailFailed = (payload: any) => ({
    type: ActionBooking.GET_DATA_DETAIL_FAILED,
    payload
})

export const GetHotelRequest = () => ({
    type: ActionBooking.HOTEL_DATA_REQUEST
})

export const GetHotelSuccess = (payload: any) => ({
    type: ActionBooking.HOTEL_DATA_SUCCESS,
    payload
})

export const GetHotelFailed = (payload: any) => ({
    type: ActionBooking.HOTEL_DATA_FAILED,
    payload
})

export const GetFacilitiesHotelRequest = (payload: any) => ({
    type: ActionBooking.FACILITIES_DATA_REQUEST
})

export const GetFacilitiesHotelSuccess = (payload: any) => ({
    type: ActionBooking.FACILITIES_DATA_SUCCESS,
    payload
})

export const GetFacilitiesHotelFailed = (payload: any) => ({
    type: ActionBooking.FACILITIES_DATA_FAILED,
    payload
})

export const GetFacilitiesCategoryRequest = (payload: any) => ({
    type: ActionBooking.FACILITIES_CATEGORY_DATA_REQUEST
})

export const GetFacilitiesCategorySuccess = (payload: any) => ({
    type: ActionBooking.FACILITIES_CATEGORY_DATA_SUCCESS,
    payload
})

export const GetFacilitiesCategoryFailed = (payload: any) => ({
    type: ActionBooking.FACILITIES_CATEGORY_DATA_FAILED,
    payload
})

export const GetReviewsRequest = (payload: any) => ({
    type: ActionBooking.REVIEW_DATA_REQUEST
})

export const GetReviewsSuccess = (payload: any) => ({
    type: ActionBooking.REVIEW_DATA_SUCCESS,
    payload
})

export const GetReviewsFailed = (payload: any) => ({
    type: ActionBooking.REVIEW_DATA_FAILED, 
    payload
})

export const GetUserReviewsRequest = (payload: any) => ({
    type: ActionBooking.USER_REVIEW_DATA_REQUEST
})

export const GetUserReviewsSuccess = (payload: any) => ({
    type: ActionBooking.USER_REVIEW_DATA_SUCCESS,
    payload
})

export const GetUserReviewsFailed = (payload: any) => ({
    type: ActionBooking.USER_REVIEW_DATA_FAILED, 
    payload
})

export const GetVoucherListRequest = (payload: any) => ({
    type: ActionBooking.VOUCHER_DATA_REQUEST
})

export const GetVoucherListSuccess = (payload: any) => ({
    type: ActionBooking.VOUCHER_DATA_SUCCESS,
    payload
})

export const GetVoucherListFailed = (payload: any) => ({
    type: ActionBooking.VOUCHER_DATA_FAILED, 
    payload
})

export const GetPriceItemsRequest = (payload: any) => ({
    type: ActionBooking.PRICE_ITEMS_DATA_REQUEST
})

export const GetPriceItemsSuccess = (payload: any) => ({
    type: ActionBooking.PRICE_ITEMS_DATA_SUCCESS,
    payload
})

export const GetPriceItemsFailed = (payload: any) => ({
    type: ActionBooking.PRICE_ITEMS_DATA_FAILED, 
    payload
})

export const GetPaymentMethodsRequest = (payload: any) => ({
    type: ActionBooking.PAYMENT_DATA_REQUEST
})

export const GetPaymentMethodsSuccess = (payload: any) => ({
    type: ActionBooking.PAYMENT_DATA_SUCCESS,
    payload
})

export const GetPaymentMethodsFailed = (payload: any) => ({
    type: ActionBooking.PAYMENT_DATA_FAILED, 
    payload
})

export const AddBookingRequest = (payload: any) => ({
    type: ActionBooking.ADD_DATA_REQUEST,
    payload
})

export const AddBookingSuccess = (payload: any) => ({
    type: ActionBooking.ADD_DATA_SUCCESS,
    payload
})

export const AddBookingFailed = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_FAILED,
    payload
})

export const AddBookingDetailRequest = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_REQUEST,
    payload
})

export const AddBookingDetailSuccess = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_SUCCESS,
    payload
})

export const AddBookingDetailFailed = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_FAILED,
    payload
})

export const AddBookingDetailExtraRequest = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_EXTRA_REQUEST,
    payload
})

export const AddBookingDetailExtraSuccess = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_EXTRA_SUCCESS,
    payload
})

export const AddBookingDetailExtraFailed = (payload: any) => ({
    type: ActionBooking.ADD_DATA_DETAIL_EXTRA_FAILED,
    payload
})

export const AddSpecialVoucherCouponsRequest = (payload: any) => ({
    type: ActionBooking.ADD_SPECIAL_OFFER_COUPONS_REQUEST,
    payload
})

export const AddSpecialVoucherCouponsSuccess = (payload: any) => ({
    type: ActionBooking.ADD_SPECIAL_OFFER_COUPONS_SUCCESS,
    payload
})

export const AddSpecialVoucherCouponsFailed = (payload: any) => ({
    type: ActionBooking.ADD_SPECIAL_OFFER_COUPONS_FAILED,
    payload
})

export const EditBookingRequest = (payload) =>({
    type: ActionType.EDIT_DATA_REQUEST,
    payload
})

export const EditBookingSuccess = (payload) =>({
    type: ActionType.EDIT_DATA_SUCCESS,
    payload
})

export const EditBookingFailed = (payload) =>({
    type: ActionType.EDIT_DATA_FAILED,
    payload
})