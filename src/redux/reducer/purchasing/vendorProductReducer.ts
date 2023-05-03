import * as ActionType from '../../constant/purchasing/vendorProductConstant'

const INIT_STATE = {
    vendorProducts: []
}

const vendorProductReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_VEPRO_REQUEST:
            return { ...state }
        case ActionType.GET_VEPRO_SUCCESS:
            return GetvendorProductsuccessfully(state, action)
        case ActionType.ADD_VEPRO_REQUEST:
            return { ...state }
        case ActionType.ADD_VEPRO_SUCCESS:
            return AddvendorProductsuccessfully(state, action)
        case ActionType.EDIT_VEPRO_REQUEST:
            return { ...state }
        case ActionType.EDIT_VEPRO_SUCCESS:
            return EditvendorProductsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetvendorProductsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        vendorProducts: action.payload
    }
}

const AddvendorProductsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        vendorProducts: [...state.vendorProducts, payload]
    }
}


const EditvendorProductsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default vendorProductReduce