import * as ActionType from '../../constant/purchasing/vendorConstant'

const INIT_STATE = {
    vendors: [],
    total: 0
}

const vendorReduce = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_VENDOR_REQUEST:
            return { ...state }
        case ActionType.GET_VENDOR_SUCCESS:
            return GetVendorsuccessfully(state, action)
        case ActionType.GETALL_VENDOR_REQUEST:
            return { ...state }
        case ActionType.GETALL_VENDOR_SUCCESS:
            return GetAllVendorsuccessfully(state, action)
        case ActionType.ADD_VENDOR_REQUEST:
            return { ...state }
        case ActionType.ADD_VENDOR_SUCCESS:
            return AddVendorsuccessfully(state, action)
        case ActionType.EDIT_VENDOR_REQUEST:
            return { ...state }
        case ActionType.EDIT_VENDOR_SUCCESS:
            return EditVendorsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetVendorsuccessfully = (state: any, action: any) => {
    return {
        ...state,
        vendors: action.payload.data,
        total: action.payload.total
    }
}

const GetAllVendorsuccessfully = (state: any, action: any) => {
    return {
        ...state,
        vendors: action.payload
    }
}

const AddVendorsuccessfully = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        vendors: [...state.vendors, payload]
    }
}


const EditVendorsuccessfully = (state: any, action: any) => {
    return {
        ...state,
    }
}
export default vendorReduce