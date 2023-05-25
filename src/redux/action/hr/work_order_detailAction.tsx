import * as wodeAction from '../../constant/hr/work_order_detailConstant'

// export const GetWodeRequest = () => ({
//     type: wodeAction.GET_WODE_REQUEST
// })

//get all wode by woroId
export const GetWodeRequest = (payload: any) => ({
    type: wodeAction.GET_WODE_REQUEST,
    payload,
})
  
export const GetWodeSuccess = (payload: any) => ({
    type: wodeAction.GET_WODE_SUCCESS,
    payload
})

export const GetWodeFailed = (payload: any) => ({
    type: wodeAction.GET_WODE_FAILED,
    payload
}) 

export const AddWodeRequest = (payload: any) => ({
    type: wodeAction.ADD_WODE_REQUEST,
    payload
})

export const AddWodeSuccess = (payload: any) => ({
    type: wodeAction.ADD_WODE_SUCCESS,
    payload
})

export const AddWodeFailed = (payload: any) => ({
    type: wodeAction.ADD_WODE_FAILED,
    payload
})

export const FindWodeRequest = (payload: any) => ({
    type: wodeAction.FIND_WODE_REQUEST,
    payload
})

export const FindWodeSuccess = (payload: any) => ({
    type: wodeAction.FIND_WODE_SUCCESS,
    payload
})

export const FindWodeFailed = (payload: any) => ({
    type: wodeAction.FIND_WODE_FAILED,
    payload
})

export const EditWodeRequest = (payload: any) => ({
    type: wodeAction.EDIT_WODE_REQUEST,
    payload
})

export const EditWodeSuccess = (payload: any) => ({
    type: wodeAction.EDIT_WODE_SUCCESS,
    payload
}) 

export const EditWodeFailed = (payload: any) => ({
    type: wodeAction.EDIT_WODE_FAILED,
    payload
})

export const DeleteWodeRequest = (payload: any) => ({
    type: wodeAction.DELETE_WODE_REQUEST,
    payload
})

export const DeleteWodeSuccess = (payload: any) => ({
    type: wodeAction.DELETE_WODE_SUCCESS,
    payload
})

export const DeleteWodeFailed = (payload: any) => ({
    type: wodeAction.DELETE_WODE_FAILED,
    payload
})
