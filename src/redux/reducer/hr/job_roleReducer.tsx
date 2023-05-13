import * as ActionType from '../../constant/hr/job_roleConstant'

const init_state = {
    joros: [],
    joro: []
}

const joroReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_JORO_REQUEST: 
            return { ...state }
        case ActionType.GET_JORO_SUCCESS:
            return GetJoro(state, action)
        case ActionType.ADD_JORO_REQUEST:
            return {...state}
        case ActionType.ADD_JORO_SUCCESS:
            return AddJoro(state,action)
        case ActionType.FIND_JORO_REQUEST:
            return {...state}
        case ActionType.FIND_JORO_SUCCESS:
            return FindJoro(state,action)
        case ActionType.EDIT_JORO_REQUEST:
            return {...state}
        case ActionType.EDIT_JORO_SUCCESS:
            return EditJoro(state,action)
        case ActionType.DELETE_JORO_REQUEST:
            return {...state}
        case ActionType.DELETE_JORO_SUCCESS:
            return DeleteJoro(state,action)

        default:
            return { ...state };
    }
}

const GetJoro = (state: any, action: any) => {
    const {payload} = action;
    return {
        ...state,
        joros: payload,
    }
}

const AddJoro = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        joros:[...state.joros,payload]
    }
}

const FindJoro = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        joro: payload 
    }
}

const EditJoro = (state:any, action:any) => {
    const {payload} = action 
    return { 
        ...state, 
    }
}

const DeleteJoro = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
    }
}

export default joroReducer
