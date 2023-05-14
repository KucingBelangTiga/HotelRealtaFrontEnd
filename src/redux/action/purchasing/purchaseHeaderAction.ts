import * as ActionType from '../../constant/purchasing/purchaseHeaderConstant'

export const GetPoheRequest = () => ({
    type: ActionType.GET_POHE_REQUEST
})

export const GetPoheSuccess = (payload:any) =>({
    type: ActionType.GET_POHE_SUCCESS,
    payload
})

export const GetPoheFailed = (payload:any) =>({
    type: ActionType.GET_POHE_FAILED,
    payload
})

export const AddPoheRequest = (payload:any) => ({
    type: ActionType.ADD_POHE_REQUEST,
    payload
})

export const AddPoheSuccess = (payload:any) => ({
    type: ActionType.ADD_POHE_SUCCESS,
    payload
})

export const AddPoheFailed = (payload:any) => ({
    type: ActionType.ADD_POHE_FAILED,
    payload
})

export const EditPoheRequest = (payload:any) =>({
    type: ActionType.EDIT_POHE_REQUEST,
    payload
})

export const EditPoheSuccess = (payload:any) =>({
    type: ActionType.EDIT_POHE_SUCCESS,
    payload
})

export const EditPoheFailed = (payload:any) =>({
    type: ActionType.EDIT_POHE_FAILED,
    payload
})

export const DelPoheRequest = (payload:any) =>({
    type:ActionType.DEL_POHE_REQUEST,
    payload
})

export const DelPoheSuccess = (payload:any) =>({
    type:ActionType.DEL_POHE_SUCCESS,
    payload
})

export const DelPoheFailed = (payload:any) =>({
    type:ActionType.DEL_POHE_FAILED,
    payload
})
