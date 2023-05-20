import * as ActionType from '../../constant/purchasing/galleryConstant'

const INIT_STATE = {
    gallerys: []
}

const galleryReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_GALLERY_REQUEST:
            return { ...state }
        case ActionType.GET_GALLERY_SUCCESS:
            return GetGallerysuccessfully(state, action)
        // case ActionType.ADD_GALLERY_REQUEST:
        //     return { ...state }
        // case ActionType.ADD_GALLERY_SUCCESS:
        //     return AddGallerysuccessfully(state, action)
        // case ActionType.EDIT_GALLERY_REQUEST:
        //     return { ...state }
        // case ActionType.EDIT_GALLERY_SUCCESS:
        //     return EditGallerysuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetGallerysuccessfully = (state:any, action:any) => {
    return {
        ...state,
        gallerys: action.payload
    }
}

// const AddGallerysuccessfully = (state:any, action:any) => {
//     const { payload } = action
//     return {
//         ...state,
//         Gallerys: [...state.Gallerys, payload]
//     }
// }

// const EditGallerysuccessfully = (state:any,action:any) => {
//     return {
//         ...state,
//     }
// }
export default galleryReduce