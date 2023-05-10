import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeBooking from '../constant/booking/bookingConstants'
import { handleAddBooking,handleGetBooking, handleGetHotel, handleGetHotelFacilities, handleGetReviews, handleGetVoucherList} from './booking/bookingSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeBooking.GET_DATA_REQUEST,handleGetBooking),
        takeEvery(ActionTypeBooking.ADD_DATA_REQUEST,handleAddBooking),
        takeEvery(ActionTypeBooking.HOTEL_DATA_REQUEST,handleGetHotel),
        takeEvery(ActionTypeBooking.FACILITIES_DATA_REQUEST,handleGetHotelFacilities),
        takeEvery(ActionTypeBooking.FACILITIES_DATA_REQUEST,handleGetReviews),
        takeEvery(ActionTypeBooking.VOUCHER_DATA_REQUEST,handleGetVoucherList),
    ])
}

export default watchAll