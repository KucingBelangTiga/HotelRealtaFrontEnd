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

export const AddBookingRequest = (payload: any) => ({
    type: ActionBooking.ADD_DATA_REQUEST,
    payload
})

export const AddBookingSuccess = (payload: any) => ({
    type: ActionBooking.ADD_DATA_SUCCESS,
    payload
})

export const AddBookingFailed = (payload: any) => ({
    type: ActionBooking.ADD_DATA_FAILED,
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