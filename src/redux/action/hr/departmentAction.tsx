import * as deptAction from '../../constant/hr/departmentConstant'

export const GetDeptRequest = () => ({
    type: deptAction.GET_DEPT_REQUEST
})

export const GetDeptSuccess = (payload: any) => ({
    type: deptAction.GET_DEPT_SUCCESS,
    payload
})

export const GetDeptFailed = (payload: any) => ({
    type: deptAction.GET_DEPT_FAILED,
    payload
}) 

export const AddDeptRequest = (payload: any) => ({
    type: deptAction.ADD_DEPT_REQUEST,
    payload
})

export const AddDeptSuccess = (payload: any) => ({
    type: deptAction.ADD_DEPT_SUCCESS,
    payload
})

export const AddDeptFailed = (payload: any) => ({
    type: deptAction.ADD_DEPT_FAILED,
    payload
})

export const FindDeptRequest = (payload: any) => ({
    type: deptAction.FIND_DEPT_REQUEST,
    payload 
})

export const FindDeptSuccess = (payload: any) => ({
    type: deptAction.FIND_DEPT_SUCCESS,
    payload
})

export const FindDeptFailed = (payload: any) => ({
    type: deptAction.FIND_DEPT_FAILED,
    payload
})

export const EditDeptRequest = (payload: any) => ({
    type: deptAction.EDIT_DEPT_REQUEST,
    payload
})

export const EditDeptSuccess = (payload: any) => ({
    type: deptAction.EDIT_DEPT_SUCCESS,
    payload
})

export const EditDeptFailed = (payload: any) => ({
    type: deptAction.EDIT_DEPT_FAILED,
    payload
})

export const DeleteDeptRequest = (payload: any) => ({
    type: deptAction.DELETE_DEPT_REQUEST,
    payload
})

export const DeleteDeptSuccess = (payload: any) => ({
    type: deptAction.DELETE_DEPT_SUCCESS,
    payload
})

export const DeleteDeptFailed = (payload: any) => ({
    type: deptAction.DELETE_DEPT_FAILED,
    payload
})
