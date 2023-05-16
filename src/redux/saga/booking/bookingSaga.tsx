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
    GetReviewsFailed,
    GetVoucherListSuccess,
    GetVoucherListFailed,
    GetPriceItemsSuccess,
    GetPriceItemsFailed,
    GetPaymentMethodsSuccess,
    GetPaymentMethodsFailed
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

function* handleGetVoucherList(): any {
    try {
        const result = yield call(Booking.GetVoucherList)
        yield put(GetVoucherListSuccess(result))
    } catch (error) {
        yield put(GetVoucherListFailed(error))
    }
}

function* handleGetPriceItems(): any {
    try {
        const result = yield call(Booking.GetPriceItems)
        yield put(GetPriceItemsSuccess(result))
    } catch (error) {
        yield put(GetPriceItemsFailed(error))
    }
}

function* handleGetPaymentMethod(): any {
    try {
        const result = yield call(Booking.GetPaymentMethods)
        yield put(GetPaymentMethodsSuccess(result))
    } catch (error) {
        yield put(GetPaymentMethodsFailed(error))
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
    handleGetVoucherList,
    handleGetPriceItems,
    handleGetPaymentMethod,
}