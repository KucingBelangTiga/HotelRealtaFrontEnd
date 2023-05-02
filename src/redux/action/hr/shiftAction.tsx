import * as shiftAction from '../../constant/hr/shiftConstant'

export const GetShiftRequest = () => ({
    type: shiftAction.GET_SHIFT_REQUEST
})

export const GetShiftSuccess = (payload: any) => ({
    type: shiftAction.GET_SHIFT_SUCCESS,
    payload
})

export const GetShiftFailed = (payload: any) => ({
    type: shiftAction.GET_SHIFT_FAILED,
    payload
}) 

export const AddShiftRequest = (payload: any) => ({
    type: shiftAction.ADD_SHIFT_REQUEST,
    payload
})

export const AddShiftSuccess = (payload: any) => ({
    type: shiftAction.ADD_SHIFT_SUCCESS,
    payload
})

export const AddShiftFailed = (payload: any) => ({
    type: shiftAction.ADD_SHIFT_FAILED,
    payload
})

export const FindShiftRequest = (payload: any) => ({
    type: shiftAction.FIND_SHIFT_REQUEST,
    payload
})

export const FindShiftSuccess = (payload: any) => ({
    type: shiftAction.FIND_SHIFT_SUCCESS,
    payload
})

export const FindShiftFailed = (payload: any) => ({
    type: shiftAction.FIND_SHIFT_FAILED,
    payload
})

export const EditShiftRequest = (payload: any) => ({
    type: shiftAction.EDIT_SHIFT_REQUEST,
    payload
})

export const EditShiftSuccess = (payload: any) => ({
    type: shiftAction.EDIT_SHIFT_SUCCESS,
    payload
})

export const EditShiftFailed = (payload: any) => ({
    type: shiftAction.EDIT_SHIFT_FAILED,
    payload
})

export const DeleteShiftRequest = (payload: any) => ({
    type: shiftAction.DELETE_SHIFT_REQUEST,
    payload
})

export const DeleteShiftSuccess = (payload: any) => ({
    type: shiftAction.DELETE_SHIFT_SUCCESS,
    payload
})

export const DeleteShiftFailed = (payload: any) => ({
    type: shiftAction.DELETE_SHIFT_FAILED,
    payload
})
