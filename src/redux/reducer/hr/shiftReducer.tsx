import * as ActionType from '../../constant/hr/shiftConstant'

const init_state = {
    shifts: [],
    shift: []
}

const shiftReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_SHIFT_REQUEST:
            return { ...state }
        case ActionType.GET_SHIFT_SUCCESS:
            return GetShift(state, action)
        case ActionType.ADD_SHIFT_REQUEST:
            return {...state}
        case ActionType.ADD_SHIFT_SUCCESS:
            return AddShift(state,action)
        case ActionType.FIND_SHIFT_REQUEST:
            return {...state}
        case ActionType.FIND_SHIFT_SUCCESS:
            return FindShift(state,action)
        case ActionType.EDIT_SHIFT_REQUEST:
            return {...state}
        case ActionType.EDIT_SHIFT_SUCCESS:
            return EditShift(state,action)
        case ActionType.DELETE_SHIFT_REQUEST:
            return {...state}
        case ActionType.DELETE_SHIFT_SUCCESS:
            return DeleteShift(state,action)

        default:
            return { ...state };
    }
}

const GetShift = (state: any, action: any) => {
    return {
        ...state,
        shifts: action.payload
    }
}

const AddShift = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        shifts:[...state.shifts,payload]
    }
}

const FindShift = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        shift: payload //kalau gagal, tambah action.payload dan/ atau ganti ke shifts
    }
}

const EditShift = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        // shifts:[...state.shifts,payload] //kalau gagal, tambah ini
    }
}

const DeleteShift = (state:any, action:any) => {
    // const { payload } = action
    // const updatedShifts = state.shifts.filter((shifts: { id: number }) => shifts.id !== payload.id)
    // return {
    //     ...state,
    //     shifts: updatedShifts //kalau gagal, ganti jadi: shifts:[...state.shifts,payload]
    // }
    return {
        ...state,
    }
    //kalau gagal, pake yg dikomentari di atas
}

export default shiftReducer
