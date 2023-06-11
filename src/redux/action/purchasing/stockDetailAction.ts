import * as ActionType from '../../constant/purchasing/stockDetailConstant'

export const GetStodetRequest = (payload:any) => ({
    type: ActionType.GET_STODET_REQUEST,
    payload
})

export const GetStodetSuccess = (payload:any) =>({
    type: ActionType.GET_STODET_SUCCESS,
    payload
})

export const GetStodetFailed = (payload:any) =>({
    type: ActionType.GET_STODET_FAILED,
    payload
})

export const AddStodetRequest = (payload:any) => ({
    type: ActionType.ADD_STODET_REQUEST,
    payload
})

export const AddStodetSuccess = (payload:any) => ({
    type: ActionType.ADD_STODET_SUCCESS,
    payload
})

export const AddStodetFailed = (payload:any) => ({
    type: ActionType.ADD_STODET_FAILED,
    payload
})

export const EditStodetRequest = (payload:any) =>({
    type: ActionType.EDIT_STODET_REQUEST,
    payload
})

export const EditStodetSuccess = (payload:any) =>({
    type: ActionType.EDIT_STODET_SUCCESS,
    payload
})

export const EditStodetFailed = (payload:any) =>({
    type: ActionType.EDIT_STODET_FAILED,
    payload
})

export const DelStodetRequest = (payload:any) =>({
    type:ActionType.DEL_STODET_REQUEST,
    payload
})

export const DelStodetSuccess = (payload:any) =>({
    type:ActionType.DEL_STODET_SUCCESS,
    payload
})

export const DelStodetFailed = (payload:any) =>({
    type:ActionType.DEL_STODET_FAILED,
    payload
})
