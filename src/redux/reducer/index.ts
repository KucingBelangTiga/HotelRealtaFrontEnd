import { combineReducers } from "redux";
import BookingReducers from "./booking/bookingReducers";

const rootReducer = combineReducers({
    bookingState: BookingReducers
})

export default rootReducer