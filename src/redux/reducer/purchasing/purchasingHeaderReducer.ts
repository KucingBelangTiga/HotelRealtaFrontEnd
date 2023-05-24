import * as ActionType from '../../constant/purchasing/purchaseHeaderConstant'

const INIT_STATE = {
    pohes: [],
    total: 0
}

const poheReduce = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_POHE_REQUEST:
            return { ...state }
        case ActionType.GET_POHE_SUCCESS:
            return GetPohesuccessfully(state, action)
        case ActionType.ADD_POHE_REQUEST:
            return { ...state }
        case ActionType.ADD_POHE_SUCCESS:
            return AddPohesuccessfully(state, action)
        case ActionType.EDIT_POHE_REQUEST:
            return { ...state }
        case ActionType.EDIT_POHE_SUCCESS:
            return EditPohesuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetPohesuccessfully = (state: any, action: any) => {
    return {
        ...state,
        pohes: action.payload.data,
        total: action.payload.total
    }
}

const AddPohesuccessfully = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        pohes: [...state.pohes, payload]
    }
}

const EditPohesuccessfully = (state: any, action: any) => {
    return {
        ...state,
    }
}
export default poheReduce