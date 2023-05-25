import * as edhiAction from '../../constant/hr/employee_department_historyConstant'

export const GetEdhiAllRequest = () => ({
    type: edhiAction.GET_EDHIALL_REQUEST
})

export const GetEdhiAllSuccess = (payload: any) => ({
    type: edhiAction.GET_EDHI_SUCCESS,
    payload
})

export const GetEdhiAllFailed = (payload: any) => ({
    type: edhiAction.GET_EDHI_FAILED,
    payload
}) 

//get by empId
export const GetEdhiRequest = (payload: any) => ({
    type: edhiAction.GET_EDHI_REQUEST,
    payload,
})

export const GetEdhiSuccess = (payload: any) => ({
    type: edhiAction.GET_EDHI_SUCCESS,
    payload
})

export const GetEdhiFailed = (payload: any) => ({
    type: edhiAction.GET_EDHI_FAILED,
    payload
}) 

export const AddEdhiRequest = (payload: any) => ({
    type: edhiAction.ADD_EDHI_REQUEST,
    payload
})

export const AddEdhiSuccess = (payload: any) => ({
    type: edhiAction.ADD_EDHI_SUCCESS,
    payload
})

export const AddEdhiFailed = (payload: any) => ({
    type: edhiAction.ADD_EDHI_FAILED,
    payload
})

export const FindEdhiRequest = (payload: any) => ({
    type: edhiAction.FIND_EDHI_REQUEST,
    payload
})

export const FindEdhiSuccess = (payload: any) => ({
    type: edhiAction.FIND_EDHI_SUCCESS,
    payload
})

export const FindEdhiFailed = (payload: any) => ({
    type: edhiAction.FIND_EDHI_FAILED,
    payload
})

export const EditEdhiRequest = (payload: any) => ({
    type: edhiAction.EDIT_EDHI_REQUEST,
    payload
})

export const EditEdhiSuccess = (payload: any) => ({
    type: edhiAction.EDIT_EDHI_SUCCESS,
    payload
})

export const EditEdhiFailed = (payload: any) => ({
    type: edhiAction.EDIT_EDHI_FAILED,
    payload
})

export const DeleteEdhiRequest = (payload: any) => ({
    type: edhiAction.DELETE_EDHI_REQUEST,
    payload
})

export const DeleteEdhiSuccess = (payload: any) => ({
    type: edhiAction.DELETE_EDHI_SUCCESS,
    payload
})

export const DeleteEdhiFailed = (payload: any) => ({
    type: edhiAction.DELETE_EDHI_FAILED,
    payload
})
