import { call, put } from 'redux-saga/effects'
import Booking from '@/src/api/booking/booking'
import { 
    GetBookingRequest,
    GetBookingSuccess,
    GetBookingFailed,
    GetHotelRequest,
    GetHotelSuccess,
    GetHotelFailed,
    AddBookingRequest,
    AddBookingSuccess,
    AddBookingFailed,
    EditBookingRequest,
    EditBookingSuccess,
    EditBookingFailed,
    GetFacilitiesHotelRequest,
    GetFacilitiesHotelSuccess,
    GetFacilitiesHotelFailed,
    GetReviewsSuccess,
    GetReviewsFailed
} from '../../action/booking/bookingActions'

function* handleGetBooking(): any {
    try {
        const result = yield call(Booking.GetData)
        yield put(GetBookingSuccess(result))
    } catch (error) {
        yield put(GetBookingFailed(error))
    }
}

function* handleGetHotel(): any {
    try {
        const result = yield call(Booking.GetData)
        yield put(GetHotelSuccess(result))
    } catch (error) {
        yield put(GetHotelFailed(error))
    }
}

function* handleGetHotelFacilities(action:any) {
    const {payload} = action
    try {
        const result = yield call(Booking.GetFacilitiesHotel,payload)
        yield put(GetFacilitiesHotelSuccess(result))
    } catch (error) {
        yield put(GetFacilitiesHotelFailed(error))
    }
}

function* handleGetReviews(): any {
    try {
        const result = yield call(Booking.GetReviews)
        yield put(GetReviewsSuccess(result))
    } catch (error) {
        yield put(GetReviewsFailed(error))
    }
}

function* handleAddBooking(action:any) {
    const {payload} = action
    try {
        const result = yield call(Booking.Create,payload)
        yield put(AddBookingSuccess(result.data))
    } catch (error) {
        yield put(AddBookingFailed(error))
    }
}

export {
    handleGetBooking,
    handleAddBooking,
    handleGetHotel,
    handleGetHotelFacilities,
    handleGetReviews,
}