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

        case ActionType.GET_DATA_DETAIL_REQUEST:
            return { ...state }
        case ActionType.GET_DATA_DETAIL_SUCCESS:
            return GetBookingDetail(state, action)

        case ActionType.ADD_DATA_REQUEST:
            return {...state}
        case ActionType.ADD_DATA_SUCCESS:
            return AddBooking(state,action)

        case ActionType.ADD_DATA_DETAIL_REQUEST:
            return {...state}
        case ActionType.ADD_DATA_DETAIL_SUCCESS:
            return AddBookingDetail(state,action)

        case ActionType.ADD_DATA_DETAIL_EXTRA_REQUEST:
            return {...state}
        case ActionType.ADD_DATA_DETAIL_EXTRA_SUCCESS:
            return AddBookingDetailExtra(state,action)

        case ActionType.ADD_SPECIAL_OFFER_COUPONS_REQUEST:
            return {...state}
        case ActionType.ADD_SPECIAL_OFFER_COUPONS_SUCCESS:
            return AddSpecialOfferCoupons(state,action)

        case ActionType.HOTEL_DATA_REQUEST:
            return {...state}
        case ActionType.HOTEL_DATA_SUCCESS:
            return HotelData(state,action)

        case ActionType.FACILITIES_CATEGORY_DATA_REQUEST:
            return {...state}
        case ActionType.FACILITIES_CATEGORY_DATA_SUCCESS:
            return FacilitiesCategory(state,action)

        case ActionType.FACILITIES_DATA_SUCCESS:
            return HotelFacilitiesData(state,action)

        case ActionType.REVIEW_DATA_SUCCESS:
            return ReviewsData(state,action)

        case ActionType.VOUCHER_DATA_SUCCESS:
            return VoucherData(state,action)

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

const GetBookingDetail = (state: any, action: any) => {
    return {
        ...state,
        bookings: action.payload
    }
}

const HotelData = (state: any, action: any) => {
    return {
        ...state,
        bookings: action.payload
    }
}

const FacilitiesCategory = (state: any, action: any) => {
    return {
        ...state,
        bookings: action.payload
    }
}

const HotelFacilitiesData = (state: any, action: any) => {
    const {payload} = action
    return {
        ...state,
        bookings: [action.payload,payload]
    }
}

const ReviewsData = (state: any, action: any) => {
    const {payload} = action
    return {
        ...state,
        bookings: [action.payload,payload]
    }
}

const UserReviewsData = (state: any, action: any) => {
    const {payload} = action
    return {
        ...state,
        bookings: [action.payload,payload]
    }
}

const VoucherData = (state: any, action: any) => {
    const {payload} = action
    return {
        ...state,
        bookings: [action.payload,payload]
    }
}

const PriceItemsData = (state: any, action: any) => {
    const {payload} = action
    return {
        ...state,
        bookings: [action.payload,payload]
    }
}

const PaymentMethods = (state: any, action: any) => {
    const {payload} = action
    return {
        ...state,
        bookings: [action.payload,payload]
    }
}

const AddBooking = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        bookings:[...state.bookings,payload]
    }
}

const AddBookingDetail = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        bookings:[...state.bookings,payload]
    }
}

const AddBookingDetailExtra = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        bookings:[...state.bookings,payload]
    }
}

const AddSpecialOfferCoupons = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        bookings:[...state.bookings,payload]
    }
}

export default BookingReduce