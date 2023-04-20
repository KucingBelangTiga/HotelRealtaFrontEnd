import { call, put } from 'redux-saga/effects'
import Booking from '@/src/api/booking/booking'
import { 
    GetBookingRequest,
    GetBookingSuccess,
    GetBookingFailed,
    AddBookingRequest,
    AddBookingSuccess,
    AddBookingFailed,
    EditBookingRequest,
    EditBookingSuccess,
    EditBookingFailed
} from '../../action/booking/bookingActions'

function* handleGetBooking(): any {
    try {
        const result = yield call(Booking.GetData)
        yield put(GetBookingSuccess(result))
    } catch (error) {
        yield put(GetBookingFailed(error))
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
    handleAddBooking
}