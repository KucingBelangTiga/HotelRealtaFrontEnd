import * as ActionType from '../../constant/hr/work_ordersConstant'

const init_state = {
    woros: [],
    woro: []
}

const woroReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_WORO_REQUEST:
            return { ...state }
        case ActionType.GET_WORO_SUCCESS:
            return GetWoro(state, action)
        case ActionType.ADD_WORO_REQUEST:
            return {...state}
        case ActionType.ADD_WORO_SUCCESS:
            return AddWoro(state,action)
        case ActionType.FIND_WORO_REQUEST:
            return {...state}
        case ActionType.FIND_WORO_SUCCESS:
            return FindWoro(state,action)
        case ActionType.EDIT_WORO_REQUEST:
            return {...state}
        case ActionType.EDIT_WORO_SUCCESS:
            return EditWoro(state,action)
        case ActionType.DELETE_WORO_REQUEST:
            return {...state}
        case ActionType.DELETE_WORO_SUCCESS:
            return DeleteWoro(state,action)

        default:
            return { ...state };
    }
}

const GetWoro = (state: any, action: any) => {
    return {
        ...state,
        woros: action.payload
    }
}

const AddWoro = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        woros:[...state.woros,payload]
    }
}

const FindWoro = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        woro: payload 
    }
}

const EditWoro = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
    }
}

const DeleteWoro = (state:any, action:any) => {
    return {
        ...state,
    }
}

export default woroReducer
