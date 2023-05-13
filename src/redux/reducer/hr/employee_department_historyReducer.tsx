import * as ActionType from '../../constant/hr/employee_department_historyConstant'

const init_state = {
    edhis: [],
    edhi: []
}

const edhiReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_EDHI_REQUEST:
            return { ...state }
        case ActionType.GET_EDHI_SUCCESS:
            return GetEdhi(state, action)
        case ActionType.ADD_EDHI_REQUEST:
            return {...state}
        case ActionType.ADD_EDHI_SUCCESS:
            return AddEdhi(state,action)
        case ActionType.FIND_EDHI_REQUEST:
            return {...state}
        case ActionType.FIND_EDHI_SUCCESS:
            return FindEdhi(state,action)
        case ActionType.EDIT_EDHI_REQUEST:
            return {...state}
        case ActionType.EDIT_EDHI_SUCCESS:
            return EditEdhi(state,action)
        case ActionType.DELETE_EDHI_REQUEST:
            return {...state}
        case ActionType.DELETE_EDHI_SUCCESS:
            return DeleteEdhi(state,action)

        default:
            return { ...state };
    }
}

const GetEdhi = (state: any, action: any) => {
    return {
        ...state,
        edhis: action.payload
    }
}

const AddEdhi = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        edhis:[...state.edhis,payload]
    }
}

const FindEdhi = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        edhi: payload
    }
}

const EditEdhi = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
    }
}

const DeleteEdhi = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
    }
}

export default edhiReducer
