import * as ActionType from '../../constant/purchasing/stockDetailConstant'

const INIT_STATE = {
    stockDetails: []
}

const stodetReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_STODET_REQUEST:
            return { ...state }
        case ActionType.GET_STODET_SUCCESS:
            return GetStodetsuccessfully(state, action)
        case ActionType.ADD_STODET_REQUEST:
            return { ...state }
        case ActionType.ADD_STODET_SUCCESS:
            return AddStodetsuccessfully(state, action)
        case ActionType.EDIT_STODET_REQUEST:
            return { ...state }
        case ActionType.EDIT_STODET_SUCCESS:
            return EditStodetsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetStodetsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        stockDetails: action.payload
    }
}

const AddStodetsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        stockDetails: [...state.stockDetails, payload]
    }
}


const EditStodetsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default stodetReduce