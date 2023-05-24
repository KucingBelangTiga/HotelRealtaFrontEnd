import * as ActionType from '../../constant/purchasing/vendorConstant'

export const GetVendorRequest = (page:number) => ({
    type: ActionType.GET_VENDOR_REQUEST,
    page
})

export const GetVendorSuccess = (payload:any) =>({
    type: ActionType.GET_VENDOR_SUCCESS,
    payload
})

export const GetVendorFailed = (payload:any) =>({
    type: ActionType.GET_VENDOR_FAILED,
    payload
})

export const GetAllVendorRequest = () => ({
    type: ActionType.GETALL_VENDOR_REQUEST
})

export const GetAllVendorSuccess = (payload:any) =>({
    type: ActionType.GETALL_VENDOR_SUCCESS,
    payload
})

export const GetAllVendorFailed = (payload:any) =>({
    type: ActionType.GETALL_VENDOR_FAILED,
    payload
})
export const AddVendorRequest = (payload:any) => ({
    type: ActionType.ADD_VENDOR_REQUEST,
    payload
})

export const AddVendorSuccess = (payload:any) => ({
    type: ActionType.ADD_VENDOR_SUCCESS,
    payload
})

export const AddVendorFailed = (payload:any) => ({
    type: ActionType.ADD_VENDOR_FAILED,
    payload
})

export const EditVendorRequest = (payload:any) =>({
    type: ActionType.EDIT_VENDOR_REQUEST,
    payload
})

export const EditVendorSuccess = (payload:any) =>({
    type: ActionType.EDIT_VENDOR_SUCCESS,
    payload
})

export const EditVendorFailed = (payload:any) =>({
    type: ActionType.EDIT_VENDOR_FAILED,
    payload
})

export const DelVendorRequest = (payload:any) =>({
    type:ActionType.DEL_VENDOR_REQUEST,
    payload
})

export const DelVendorSuccess = (payload:any) =>({
    type:ActionType.DEL_VENDOR_SUCCESS,
    payload
})

export const DelVendorFailed = (payload:any) =>({
    type:ActionType.DEL_VENDOR_FAILED,
    payload
})
