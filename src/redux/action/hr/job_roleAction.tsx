import * as joroAction from '../../constant/hr/job_roleConstant'

export const GetJoroRequest = () => ({
    type: joroAction.GET_JORO_REQUEST
})

export const GetJoroSuccess = (payload: any) => ({
    type: joroAction.GET_JORO_SUCCESS, 
    payload
}) 

export const GetJoroFailed = (payload: any) => ({
    type: joroAction.GET_JORO_FAILED,
    payload
}) 

export const AddJoroRequest = (payload: any) => ({
    type: joroAction.ADD_JORO_REQUEST,
    payload
})

export const AddJoroSuccess = (payload: any) => ({
    type: joroAction.ADD_JORO_SUCCESS,
    payload
})

export const AddJoroFailed = (payload: any) => ({
    type: joroAction.ADD_JORO_FAILED,
    payload
})

export const FindJoroRequest = (payload: any) => ({
    type: joroAction.FIND_JORO_REQUEST,
    payload
})

export const FindJoroSuccess = (payload: any) => ({
    type: joroAction.FIND_JORO_SUCCESS,
    payload
})

export const FindJoroFailed = (payload: any) => ({
    type: joroAction.FIND_JORO_FAILED,
    payload
})

export const EditJoroRequest = (payload: any) => ({
    type: joroAction.EDIT_JORO_REQUEST,
    payload
})

export const EditJoroSuccess = (payload: any) => ({
    type: joroAction.EDIT_JORO_SUCCESS,
    payload
})

export const EditJoroFailed = (payload: any) => ({
    type: joroAction.EDIT_JORO_FAILED,
    payload
})

export const DeleteJoroRequest = (payload: any) => ({
    type: joroAction.DELETE_JORO_REQUEST,
    payload
})

export const DeleteJoroSuccess = (payload: any) => ({
    type: joroAction.DELETE_JORO_SUCCESS,
    payload
})

export const DeleteJoroFailed = (payload: any) => ({
    type: joroAction.DELETE_JORO_FAILED,
    payload
})
