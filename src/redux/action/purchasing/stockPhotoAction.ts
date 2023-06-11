import * as ActionType from '../../constant/purchasing/stockPhotoConstant'

export const GetStockPhotoRequest = (payload:any) => ({
    type: ActionType.GET_STOPOT_REQUEST,
    payload
})

export const GetStockPhotoSuccess = (payload:any) =>({
    type: ActionType.GET_STOPOT_SUCCESS,
    payload
})

export const GetStockPhotoFailed = (payload:any) =>({
    type: ActionType.GET_STOPOT_FAILED,
    payload
})

export const AddStockPhotoRequest = (payload:any) => ({
    type: ActionType.ADD_STOPOT_REQUEST,
    payload
})

export const AddStockPhotoSuccess = (payload:any) => ({
    type: ActionType.ADD_STOPOT_SUCCESS,
    payload
})

export const AddStockPhotoFailed = (payload:any) => ({
    type: ActionType.ADD_STOPOT_FAILED,
    payload
})

export const EditStockPhotoRequest = (payload:any) =>({
    type: ActionType.EDIT_STOPOT_REQUEST,
    payload
})

export const EditStockPhotoSuccess = (payload:any) =>({
    type: ActionType.EDIT_STOPOT_SUCCESS,
    payload
})

export const EditStockPhotoFailed = (payload:any) =>({
    type: ActionType.EDIT_STOPOT_FAILED,
    payload
})

export const DelStockPhotoRequest = (payload:any) =>({
    type:ActionType.DEL_STOPOT_REQUEST,
    payload
})

export const DelStockPhotoSuccess = (payload:any) =>({
    type:ActionType.DEL_STOPOT_SUCCESS,
    payload
})

export const DelStockPhotoFailed = (payload:any) =>({
    type:ActionType.DEL_STOPOT_FAILED,
    payload
})
