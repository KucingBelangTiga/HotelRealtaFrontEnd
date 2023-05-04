import * as ActionType from '../../constant/hr/employee_pay_historyConstant'

const init_state = {
    ephis: [],
    ephi: []
}

const ephiReducer = (state = init_state, action: any) => {
    switch (action.type) {
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
        ephi: payload //kalau gagal, tambah action.payload dan/ atau ganti ke ephis
    }
}

const EditEphi = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        // ephis:[...state.ephis,payload] //kalau gagal, tambah ini
    }
}

const DeleteEphi = (state:any, action:any) => {
    // const { payload } = action
    // const updatedEphis = state.ephis.filter((ephis: { id: number }) => ephis.id !== payload.id)
    // return {
    //     ...state,
    //     ephis: updatedEphis //kalau gagal, ganti jadi: ephis:[...state.ephis,payload]
    // }
    return {
        ...state,
    }
    //kalau gagal, pake yg dikomentari di atas
}

export default ephiReducer
