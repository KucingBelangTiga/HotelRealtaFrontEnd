import * as ActionType from '../../constant/purchasing/galleryConstant'

export const GetGalleryRequest = (page:number) => ({
    type: ActionType.GET_GALLERY_REQUEST,
    page
})

export const GetGallerySuccess = (payload:any) =>({
    type: ActionType.GET_GALLERY_SUCCESS,
    payload
})

export const GetGalleryFailed = (payload:any) =>({
    type: ActionType.GET_GALLERY_FAILED,
    payload
})

