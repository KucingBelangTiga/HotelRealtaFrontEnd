import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeBooking from '../constant/booking/bookingConstants'
import { handleAddBooking,handleAddBookingDetail,handleAddBookingDetailExtra,handleAddSpecialOfferCoupons,handleGetBooking, handleGetBookingDetail, handleGetHotel, handleGetHotelFacilities, handleGetPriceItems, handleGetReviews, handleGetVoucherList} from './booking/bookingSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeBooking.GET_DATA_REQUEST,handleGetBooking),
        takeEvery(ActionTypeBooking.GET_DATA_DETAIL_REQUEST,handleGetBookingDetail),
        takeEvery(ActionTypeBooking.ADD_DATA_REQUEST,handleAddBooking),
        takeEvery(ActionTypeBooking.HOTEL_DATA_REQUEST,handleGetHotel),
        takeEvery(ActionTypeBooking.FACILITIES_DATA_REQUEST,handleGetHotelFacilities),
        takeEvery(ActionTypeBooking.FACILITIES_DATA_REQUEST,handleGetReviews),
        takeEvery(ActionTypeBooking.VOUCHER_DATA_REQUEST,handleGetVoucherList),
        takeEvery(ActionTypeBooking.PRICE_ITEMS_DATA_REQUEST,handleGetPriceItems),
        takeEvery(ActionTypeBooking.ADD_DATA_DETAIL_REQUEST,handleAddBookingDetail),
        takeEvery(ActionTypeBooking.ADD_DATA_DETAIL_EXTRA_REQUEST,handleAddBookingDetailExtra),
        takeEvery(ActionTypeBooking.ADD_SPECIAL_OFFER_COUPONS_REQUEST,handleAddSpecialOfferCoupons),
    ])
}

export default watchAll