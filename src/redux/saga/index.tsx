import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeBooking from '../constant/booking/bookingConstants'
import { handleAddBooking,handleGetBooking } from './booking/bookingSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeBooking.GET_DATA_REQUEST,handleGetBooking),
        takeEvery(ActionTypeBooking.ADD_DATA_REQUEST,handleAddBooking)
    ])
}

export default watchAll