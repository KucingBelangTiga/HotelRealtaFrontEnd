import * as ActionType from '../../constant/purchasing/purchaseDetailConstant'

export const GetPodetRequest = (payload:any, page:number) => ({
    type: ActionType.GET_PODET_REQUEST,
    payload,
    page
})

export const GetPodetSuccess = (payload:any) =>({
    type: ActionType.GET_PODET_SUCCESS,
    payload
})

export const GetPodetFailed = (payload:any) =>({
    type: ActionType.GET_PODET_FAILED,
    payload
})

export const AddPodetRequest = (payload:any) => ({
    type: ActionType.ADD_PODET_REQUEST,
    payload
})

export const AddPodetSuccess = (payload:any) => ({
    type: ActionType.ADD_PODET_SUCCESS,
    payload
})

export const AddPodetFailed = (payload:any) => ({
    type: ActionType.ADD_PODET_FAILED,
    payload
})

export const EditPodetRequest = (payload:any) =>({
    type: ActionType.EDIT_PODET_REQUEST,
    payload
})

export const EditPodetSuccess = (payload:any) =>({
    type: ActionType.EDIT_PODET_SUCCESS,
    payload
})

export const EditPodetFailed = (payload:any) =>({
    type: ActionType.EDIT_PODET_FAILED,
    payload
})

export const DelPodetRequest = (payload:any) =>({
    type:ActionType.DEL_PODET_REQUEST,
    payload
})

export const DelPodetSuccess = (payload:any) =>({
    type:ActionType.DEL_PODET_SUCCESS,
    payload
})

export const DelPodetFailed = (payload:any) =>({
    type:ActionType.DEL_PODET_FAILED,
    payload
})
