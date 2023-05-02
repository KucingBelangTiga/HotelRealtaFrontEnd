import * as woroAction from '../../constant/hr/work_ordersConstant'

export const GetWoroRequest = () => ({
    type: woroAction.GET_WORO_REQUEST
})

export const GetWoroSuccess = (payload: any) => ({
    type: woroAction.GET_WORO_SUCCESS,
    payload
})

export const GetWoroFailed = (payload: any) => ({
    type: woroAction.GET_WORO_FAILED,
    payload
}) 

export const AddWoroRequest = (payload: any) => ({
    type: woroAction.ADD_WORO_REQUEST,
    payload
})

export const AddWoroSuccess = (payload: any) => ({
    type: woroAction.ADD_WORO_SUCCESS,
    payload
})

export const AddWoroFailed = (payload: any) => ({
    type: woroAction.ADD_WORO_FAILED,
    payload
})

export const FindWoroRequest = (payload: any) => ({
    type: woroAction.FIND_WORO_REQUEST,
    payload
})

export const FindWoroSuccess = (payload: any) => ({
    type: woroAction.FIND_WORO_SUCCESS,
    payload
})

export const FindWoroFailed = (payload: any) => ({
    type: woroAction.FIND_WORO_FAILED,
    payload
})

export const EditWoroRequest = (payload: any) => ({
    type: woroAction.EDIT_WORO_REQUEST,
    payload
})

export const EditWoroSuccess = (payload: any) => ({
    type: woroAction.EDIT_WORO_SUCCESS,
    payload
})

export const EditWoroFailed = (payload: any) => ({
    type: woroAction.EDIT_WORO_FAILED,
    payload
})

export const DeleteWoroRequest = (payload: any) => ({
    type: woroAction.DELETE_WORO_REQUEST,
    payload
})

export const DeleteWoroSuccess = (payload: any) => ({
    type: woroAction.DELETE_WORO_SUCCESS,
    payload
})

export const DeleteWoroFailed = (payload: any) => ({
    type: woroAction.DELETE_WORO_FAILED,
    payload
})
