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
        case ActionType.ADD_PHOTO_REQUEST:
            return {...state}
        case ActionType.ADD_PHOTO_SUCCESS:
            return AddPhoto(state,action)
        case ActionType.EDIT_PHOTO_REQUEST:
            return {...state}
        case ActionType.EDIT_PHOTO_SUCCESS:
            return EditPhoto(state,action)
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
        emp: payload //kalau gagal, tambah action.payload dan/ atau ganti ke emps
    }
}

const EditEmp = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        // emps:[...state.emps,payload] //kalau gagal, tambah ini
    }
}

const AddPhoto = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        emps:[...state.emps,payload]
    }
}

const EditPhoto = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        // emps:[...state.emps,payload] //kalau gagal, tambah ini
    }
}

const DeleteEmp = (state:any, action:any) => {
    // const { payload } = action
    // const updatedEmps = state.emps.filter((emps: { id: number }) => emps.id !== payload.id)
    // return {
    //     ...state,
    //     emps: updatedEmps //kalau gagal, ganti jadi: emps:[...state.emps,payload]
    // }
    return {
        ...state,
    }
    //kalau gagal, pake yg dikomentari di atas
}

export default empReducer
