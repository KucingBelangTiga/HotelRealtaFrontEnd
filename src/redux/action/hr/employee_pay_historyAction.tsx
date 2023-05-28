import * as ephiAction from '../../constant/hr/employee_pay_historyConstant'

export const GetEphiAllRequest = () => ({
    type: ephiAction.GET_EPHIALL_REQUEST
})

export const GetEphiAllSuccess = (payload: any) => ({
    type: ephiAction.GET_EPHI_SUCCESS,
    payload
})

export const GetEphiAllFailed = (payload: any) => ({
    type: ephiAction.GET_EPHI_FAILED,
    payload
}) 

//ephiEmp
export const GetEphiRequest = (payload: any) => ({
    type: ephiAction.GET_EPHI_REQUEST,
    payload
})

export const GetEphiSuccess = (payload: any) => ({
    type: ephiAction.GET_EPHI_SUCCESS,
    payload
})

export const GetEphiFailed = (payload: any) => ({
    type: ephiAction.GET_EPHI_FAILED,
    payload
}) 
//

export const AddEphiRequest = (payload: any) => ({
    type: ephiAction.ADD_EPHI_REQUEST,
    payload
})

export const AddEphiSuccess = (payload: any) => ({
    type: ephiAction.ADD_EPHI_SUCCESS,
    payload
})

export const AddEphiFailed = (payload: any) => ({
    type: ephiAction.ADD_EPHI_FAILED,
    payload
})

export const FindEphiRequest = (payload: any) => ({
    type: ephiAction.FIND_EPHI_REQUEST,
    payload
})

export const FindEphiSuccess = (payload: any) => ({
    type: ephiAction.FIND_EPHI_SUCCESS,
    payload
})

export const FindEphiFailed = (payload: any) => ({
    type: ephiAction.FIND_EPHI_FAILED,
    payload
})

export const EditEphiRequest = (payload: any) => ({
    type: ephiAction.EDIT_EPHI_REQUEST,
    payload
})

export const EditEphiSuccess = (payload: any) => ({
    type: ephiAction.EDIT_EPHI_SUCCESS,
    payload
})

export const EditEphiFailed = (payload: any) => ({
    type: ephiAction.EDIT_EPHI_FAILED,
    payload
})

export const DeleteEphiRequest = (payload: any) => ({
    type: ephiAction.DELETE_EPHI_REQUEST,
    payload
})

export const DeleteEphiSuccess = (payload: any) => ({
    type: ephiAction.DELETE_EPHI_SUCCESS,
    payload
})

export const DeleteEphiFailed = (payload: any) => ({
    type: ephiAction.DELETE_EPHI_FAILED,
    payload
})
