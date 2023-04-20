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