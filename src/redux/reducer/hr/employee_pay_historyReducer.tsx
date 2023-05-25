import * as ActionType from '../../constant/hr/employee_pay_historyConstant'

const init_state = {
    ephis: [],
    ephi: []
}

const ephiReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_EPHIALL_REQUEST:
            return { ...state }
        case ActionType.GET_EPHIALL_SUCCESS:
            return GetEphiAll(state, action)
            //
        case ActionType.GET_EPHI_REQUEST:
            return { ...state }
        case ActionType.GET_EPHI_SUCCESS:
            return GetEphi(state, action)
        case ActionType.ADD_EPHI_REQUEST:
            return {...state}
        case ActionType.ADD_EPHI_SUCCESS:
            return AddEphi(state,action)
        case ActionType.FIND_EPHI_REQUEST:
            return {...state}
        case ActionType.FIND_EPHI_SUCCESS:
            return FindEphi(state,action)
        case ActionType.EDIT_EPHI_REQUEST:
            return {...state}
        case ActionType.EDIT_EPHI_SUCCESS:
            return EditEphi(state,action)
        case ActionType.DELETE_EPHI_REQUEST:
            return {...state}
        case ActionType.DELETE_EPHI_SUCCESS:
            return DeleteEphi(state,action)

        default:
            return { ...state };
    }
}

const GetEphiAll = (state: any, action: any) => {
    return {
        ...state,
        ephis: action.payload
    }
}
//
const GetEphi = (state: any, action: any) => {
    return {
        ...state,
        ephis: action.payload
    }
}

const AddEphi = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        ephis:[...state.ephis,payload]
    }
}

const FindEphi = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        ephi: payload 
    }
}

const EditEphi = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
    }
}

const DeleteEphi = (state:any, action:any) => {
    return {
        ...state,
    }
}

export default ephiReducer
