import * as ActionType from '../../constant/hr/work_order_detailConstant'

const init_state = {
    wodes: []
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
    return {
        ...state,
        wodes: action.payload
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
        wodes: payload //kalau gagal, tambah action.payload
    }
}

const EditWode = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        wodes:[...state.wodes,payload] //kalau gagal, buat hanya state saja
    }
}

const DeleteWode = (state:any, action:any) => {
    const { payload } = action
    const updatedWodes = state.wodes.filter((wodes: { id: number }) => wodes.id !== payload.id)
    return {
        ...state,
        wodes: updatedWodes //kalau gagal, ganti jadi: wodes:[...state.wodes,payload]
    }
}

export default wodeReducer
