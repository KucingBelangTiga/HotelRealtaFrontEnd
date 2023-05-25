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
    GetPaymentMethodsFailed,
    AddBookingDetailSuccess,
    AddBookingDetailFailed,
    AddBookingDetailExtraSuccess,
    AddBookingDetailExtraFailed,
    GetBookingDetailSuccess,
    GetBookingDetailFailed,
    AddSpecialVoucherCouponsSuccess,
    AddSpecialVoucherCouponsFailed,
    GetFacilitiesCategorySuccess,
    GetFacilitiesCategoryFailed,
    GetUserReviewsSuccess,
    GetUserReviewsFailed
} from '../../action/booking/bookingActions'

function* handleGetBooking(): any {
    try {
        const result = yield call(Booking.GetData)
        yield put(GetBookingSuccess(result))
    } catch (error) {
        yield put(GetBookingFailed(error))
    }
}

function* handleGetBookingDetail(): any {
    try {
        const result = yield call(Booking.GetDataDetail)
        yield put(GetBookingDetailSuccess(result))
    } catch (error) {
        yield put(GetBookingDetailFailed(error))
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

function* handleGetHotelFacilitiesCategory(action:any) {
    const {payload} = action
    try {
        const result = yield call(Booking.GetFacilitiesCategory,payload)
        yield put(GetFacilitiesCategorySuccess(result))
    } catch (error) {
        yield put(GetFacilitiesCategoryFailed(error))
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

function* handleGetUserReviews(): any {
    try {
        const result = yield call(Booking.GetUserReviews)
        yield put(GetUserReviewsSuccess(result))
    } catch (error) {
        yield put(GetUserReviewsFailed(error))
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

function* handleAddBookingDetail(action:any) {
    const {payload} = action
    try {
        const result = yield call(Booking.CreateDetail,payload)
        yield put(AddBookingDetailSuccess(result.data))
    } catch (error) {
        yield put(AddBookingDetailFailed(error))
    }
}

function* handleAddBookingDetailExtra(action:any) {
    const {payload} = action
    try {
        const result = yield call(Booking.CreateDetailExtra,payload)
        yield put(AddBookingDetailExtraSuccess(result.data))
    } catch (error) {
        yield put(AddBookingDetailExtraFailed(error))
    }
}

function* handleAddSpecialOfferCoupons(action:any) {
    const {payload} = action
    try {
        const result = yield call(Booking.CreateSpecialOfferCoupons,payload)
        yield put(AddSpecialVoucherCouponsSuccess(result.data))
    } catch (error) {
        yield put(AddSpecialVoucherCouponsFailed(error))
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
    handleAddBookingDetail,
    handleAddBookingDetailExtra,
    handleGetBookingDetail,
    handleAddSpecialOfferCoupons,
    handleGetHotelFacilitiesCategory,
    handleGetUserReviews,
}