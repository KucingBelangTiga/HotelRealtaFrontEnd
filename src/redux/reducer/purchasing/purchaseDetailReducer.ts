import * as ActionType from '../../constant/purchasing/purchaseDetailConstant'

const INIT_STATE = {
    purchaseDetails: [],
    total:0
}

const podetReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_PODET_REQUEST:
            return { ...state }
        case ActionType.GET_PODET_SUCCESS:
            return GetPodetsuccessfully(state, action)
        case ActionType.ADD_PODET_REQUEST:
            return { ...state }
        case ActionType.ADD_PODET_SUCCESS:
            return AddPodetsuccessfully(state, action)
        case ActionType.EDIT_PODET_REQUEST:
            return { ...state }
        case ActionType.EDIT_PODET_SUCCESS:
            return EditPodetsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetPodetsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        purchaseDetails: action.payload.data,
        total: action.payload.total
    }
}

const AddPodetsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        purchaseDetails: [...state.purchaseDetails, payload]
    }
}


const EditPodetsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default podetReduce