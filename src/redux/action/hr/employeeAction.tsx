import * as empAction from '../../constant/hr/employeeConstant'

export const GetEmpRequest = () => ({
    type: empAction.GET_EMP_REQUEST
})

export const GetEmpSuccess = (payload: any) => ({
    type: empAction.GET_EMP_SUCCESS,
    payload
})

export const GetEmpFailed = (payload: any) => ({
    type: empAction.GET_EMP_FAILED,
    payload
}) 

export const AddEmpRequest = (payload: any) => ({
    type: empAction.ADD_EMP_REQUEST,
    payload
})

export const AddEmpSuccess = (payload: any) => ({
    type: empAction.ADD_EMP_SUCCESS,
    payload
})

export const AddEmpFailed = (payload: any) => ({
    type: empAction.ADD_EMP_FAILED,
    payload
})

export const FindEmpRequest = (payload: any) => ({
    type: empAction.FIND_EMP_REQUEST,
    payload
})

export const FindEmpSuccess = (payload: any) => ({
    type: empAction.FIND_EMP_SUCCESS,
    payload
})

export const FindEmpFailed = (payload: any) => ({
    type: empAction.FIND_EMP_FAILED,
    payload
})

export const EditEmpRequest = (payload: any) => ({
    type: empAction.EDIT_EMP_REQUEST,
    payload
})

export const EditEmpSuccess = (payload: any) => ({
    type: empAction.EDIT_EMP_SUCCESS,
    payload
})

export const EditEmpFailed = (payload: any) => ({
    type: empAction.EDIT_EMP_FAILED,
    payload
})

export const DeleteEmpRequest = (payload: any) => ({
    type: empAction.DELETE_EMP_REQUEST,
    payload
})

export const DeleteEmpSuccess = (payload: any) => ({
    type: empAction.DELETE_EMP_SUCCESS,
    payload
})

export const DeleteEmpFailed = (payload: any) => ({
    type: empAction.DELETE_EMP_FAILED,
    payload
})
