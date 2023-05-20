import * as ActionType from '../../constant/purchasing/galleryConstant'

export const GetGalleryRequest = () => ({
    type: ActionType.GET_GALLERY_REQUEST
})

export const GetGallerySuccess = (payload:any) =>({
    type: ActionType.GET_GALLERY_SUCCESS,
    payload
})

export const GetGalleryFailed = (payload:any) =>({
    type: ActionType.GET_GALLERY_FAILED,
    payload
})

// export const AddGalleryRequest = (payload:any) => ({
//     type: ActionType.ADD_GALLERY_REQUEST,
//     payload
// })

// export const AddGallerySuccess = (payload:any) => ({
//     type: ActionType.ADD_GALLERY_SUCCESS,
//     payload
// })

// export const AddGalleryFailed = (payload:any) => ({
//     type: ActionType.ADD_GALLERY_FAILED,
//     payload
// })

// export const EditGalleryRequest = (payload:any) =>({
//     type: ActionType.EDIT_GALLERY_REQUEST,
//     payload
// })

// export const EditGallerySuccess = (payload:any) =>({
//     type: ActionType.EDIT_GALLERY_SUCCESS,
//     payload
// })

// export const EditGalleryFailed = (payload:any) =>({
//     type: ActionType.EDIT_GALLERY_FAILED,
//     payload
// })

// export const DelGalleryRequest = (payload:any) =>({
//     type:ActionType.DEL_GALLERY_REQUEST,
//     payload
// })

// export const DelGallerySuccess = (payload:any) =>({
//     type:ActionType.DEL_GALLERY_SUCCESS,
//     payload
// })

// export const DelGalleryFailed = (payload:any) =>({
//     type:ActionType.DEL_GALLERY_FAILED,
//     payload
// })
