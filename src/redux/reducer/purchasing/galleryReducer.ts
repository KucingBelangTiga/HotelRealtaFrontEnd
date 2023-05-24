import * as ActionType from '../../constant/purchasing/galleryConstant'

const INIT_STATE = {
    gallerys: [],
    total: 0
}

const galleryReduce = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_GALLERY_REQUEST:
            return { ...state }
        case ActionType.GET_GALLERY_SUCCESS:
            return GetGallerysuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetGallerysuccessfully = (state: any, action: any) => {
    return {
        ...state,
        gallerys: action.payload.data,
        total: action.payload.total
    }
}
export default galleryReduce