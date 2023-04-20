import * as ActionType from '../../constant/booking/bookingConstants'

const init_state = {
    bookings: []
}

const BookingReduce = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_DATA_REQUEST:
            return { ...state }
        case ActionType.GET_DATA_SUCCESS:
            return GetBooking(state, action)
        case ActionType.ADD_DATA_REQUEST:
            return {...state}
        case ActionType.ADD_DATA_SUCCESS:
            return AddBooking(state,action)
        default:
            return { ...state };
    }
}

const GetBooking = (state: any, action: any) => {
    return {
        ...state,
        bookings: action.payload
    }
}

const AddBooking = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        bookings:[...state.bookings,payload]
    }
}

export default BookingReduce