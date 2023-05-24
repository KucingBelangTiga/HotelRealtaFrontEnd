import * as ActionType from '../../constant/purchasing/vendorProductConstant'

export const GetVeproRequest = (payload:any, page:number) => ({
    type: ActionType.GET_VEPRO_REQUEST,
    payload,
    page
})

export const GetVeproSuccess = (payload:any) =>({
    type: ActionType.GET_VEPRO_SUCCESS,
    payload
})

export const GetVeproFailed = (payload:any) =>({
    type: ActionType.GET_VEPRO_FAILED,
    payload
})

export const AddVeproRequest = (payload:any) => ({
    type: ActionType.ADD_VEPRO_REQUEST,
    payload
})

export const AddVeproSuccess = (payload:any) => ({
    type: ActionType.ADD_VEPRO_SUCCESS,
    payload
})

export const AddVeproFailed = (payload:any) => ({
    type: ActionType.ADD_VEPRO_FAILED,
    payload
})

export const EditVeproRequest = (payload:any) =>({
    type: ActionType.EDIT_VEPRO_REQUEST,
    payload
})

export const EditVeproSuccess = (payload:any) =>({
    type: ActionType.EDIT_VEPRO_SUCCESS,
    payload
})

export const EditVeproFailed = (payload:any) =>({
    type: ActionType.EDIT_VEPRO_FAILED,
    payload
})

export const DelVeproRequest = (payload:any) =>({
    type:ActionType.DEL_VEPRO_REQUEST,
    payload
})

export const DelVeproSuccess = (payload:any) =>({
    type:ActionType.DEL_VEPRO_SUCCESS,
    payload
})

export const DelVeproFailed = (payload:any) =>({
    type:ActionType.DEL_VEPRO_FAILED,
    payload
})
