import * as ActionType from '../../constant/purchasing/stockPhotoConstant'

const INIT_STATE = {
    stockPhotos: []
}

const stopotReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_STOPOT_REQUEST:
            return { ...state }
        case ActionType.GET_STOPOT_SUCCESS:
            return GetStopotsuccessfully(state, action)
        case ActionType.ADD_STOPOT_REQUEST:
            return { ...state }
        case ActionType.ADD_STOPOT_SUCCESS:
            return AddStopotsuccessfully(state, action)
        case ActionType.EDIT_STOPOT_REQUEST:
            return { ...state }
        case ActionType.EDIT_STOPOT_SUCCESS:
            return EditStopotsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetStopotsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        stockPhotos: action.payload
    }
}

const AddStopotsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        stockPhotos: [...state.stockPhotos, payload]
    }
}


const EditStopotsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default stopotReduce