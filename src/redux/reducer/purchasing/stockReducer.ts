import * as ActionType from '../../constant/purchasing/stockConstant'

const INIT_STATE = {
    stocks: []
}

const stockReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_STOCK_REQUEST:
            return { ...state }
        case ActionType.GET_STOCK_SUCCESS:
            return GetStocksuccessfully(state, action)
        case ActionType.ADD_STOCK_REQUEST:
            return { ...state }
        case ActionType.ADD_STOCK_SUCCESS:
            return AddStocksuccessfully(state, action)
        case ActionType.EDIT_STOCK_REQUEST:
            return { ...state }
        case ActionType.EDIT_STOCK_SUCCESS:
            return EditStocksuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetStocksuccessfully = (state:any, action:any) => {
    return {
        ...state,
        stocks: action.payload
    }
}

const AddStocksuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        stocks: [...state.stocks, payload]
    }
}

const EditStocksuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default stockReduce