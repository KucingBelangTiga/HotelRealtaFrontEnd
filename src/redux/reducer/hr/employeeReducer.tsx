import * as ActionType from '../../constant/hr/employeeConstant'

const init_state = {
    emps: [],
    emp: []
}

const empReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_EMP_REQUEST:
            return { ...state }
        case ActionType.GET_EMP_SUCCESS:
            return GetEmp(state, action)
        case ActionType.ADD_EMP_REQUEST:
            return {...state}
        case ActionType.ADD_EMP_SUCCESS:
            return AddEmp(state,action)
        case ActionType.FIND_EMP_REQUEST:
            return {...state}
        case ActionType.FIND_EMP_SUCCESS:
            return FindEmp(state,action)
        case ActionType.EDIT_EMP_REQUEST:
            return {...state}
        case ActionType.EDIT_EMP_SUCCESS:
            return EditEmp(state,action)
        case ActionType.DELETE_EMP_REQUEST:
            return {...state}
        case ActionType.DELETE_EMP_SUCCESS:
            return DeleteEmp(state,action)

        default:
            return { ...state };
    }
}

const GetEmp = (state: any, action: any) => {
    return {
        ...state,
        emps: action.payload
    }
}

const AddEmp = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        emps:[...state.emps,payload]
    }
}

const FindEmp = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        emp: payload 
    }
}

const EditEmp = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
    }
}

const DeleteEmp = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
    }
}

export default empReducer
