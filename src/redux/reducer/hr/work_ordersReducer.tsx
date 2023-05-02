import * as ActionType from '../../constant/hr/work_ordersConstant'

const init_state = {
    woros: []
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
        woros: payload //kalau gagal, tambah action.payload
    }
}

const EditWoro = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        woros:[...state.woros,payload] //kalau gagal, buat hanya state saja
    }
}

const DeleteWoro = (state:any, action:any) => {
    const { payload } = action
    const updatedWoros = state.woros.filter((woros: { id: number }) => woros.id !== payload.id)
    return {
        ...state,
        woros: updatedWoros //kalau gagal, ganti jadi: woros:[...state.woros,payload]
    }
}

export default woroReducer
