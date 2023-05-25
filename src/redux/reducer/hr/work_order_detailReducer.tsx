import * as ActionType from '../../constant/hr/work_order_detailConstant'

const init_state = {
    wodes: [],
    wode: []
}

const wodeReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_WODE_REQUEST:
            return { ...state }
        case ActionType.GET_WODE_SUCCESS:
            return GetWode(state, action)
        case ActionType.ADD_WODE_REQUEST:
            return {...state}
        case ActionType.ADD_WODE_SUCCESS:
            return AddWode(state,action)
        case ActionType.FIND_WODE_REQUEST:
            return {...state}
        case ActionType.FIND_WODE_SUCCESS:
            return FindWode(state,action)
        case ActionType.EDIT_WODE_REQUEST:
            return {...state}
        case ActionType.EDIT_WODE_SUCCESS:
            return EditWode(state,action)
        case ActionType.DELETE_WODE_REQUEST:
            return {...state}
        case ActionType.DELETE_WODE_SUCCESS:
            return DeleteWode(state,action)

        default:
            return { ...state };
    }
} 

const GetWode = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        wodes: payload, 
    }
}

const AddWode = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        wodes:[...state.wodes,payload]
    }
}

const FindWode = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        wode: payload 
    }
}

const EditWode = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
    }
}

const DeleteWode = (state:any, action:any) => {
    return {
        ...state,
    }
}

export default wodeReducer
