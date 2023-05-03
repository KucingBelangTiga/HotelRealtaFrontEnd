import * as ActionType from '../../constant/purchasing/stockConstant'

export const GetStockRequest = () => ({
    type: ActionType.GET_STOCK_REQUEST
})

export const GetStockSuccess = (payload:any) =>({
    type: ActionType.GET_STOCK_SUCCESS,
    payload
})

export const GetStockFailed = (payload:any) =>({
    type: ActionType.GET_STOCK_FAILED,
    payload
})

export const AddStockRequest = (payload:any) => ({
    type: ActionType.ADD_STOCK_REQUEST,
    payload
})

export const AddStockSuccess = (payload:any) => ({
    type: ActionType.ADD_STOCK_SUCCESS,
    payload
})

export const AddStockFailed = (payload:any) => ({
    type: ActionType.ADD_STOCK_FAILED,
    payload
})

export const EditStockRequest = (payload:any) =>({
    type: ActionType.EDIT_STOCK_REQUEST,
    payload
})

export const EditStockSuccess = (payload:any) =>({
    type: ActionType.EDIT_STOCK_SUCCESS,
    payload
})

export const EditStockFailed = (payload:any) =>({
    type: ActionType.EDIT_STOCK_FAILED,
    payload
})

export const DelStockRequest = (payload:any) =>({
    type:ActionType.DEL_STOCK_REQUEST,
    payload
})

export const DelStockSuccess = (payload:any) =>({
    type:ActionType.DEL_STOCK_SUCCESS,
    payload
})

export const DelStockFailed = (payload:any) =>({
    type:ActionType.DEL_STOCK_FAILED,
    payload
})
