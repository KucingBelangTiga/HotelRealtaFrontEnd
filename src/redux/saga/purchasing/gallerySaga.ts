import { call, put } from 'redux-saga/effects'
import gallery from '@/src/api/purchasing/gallery'
import { GetGalleryFailed, GetGallerySuccess } from '../../action/purchasing/galleryAction'

function* handleGallery():any {
    try {
        const result = yield call(gallery.list)
        yield put(GetGallerySuccess(result))
    } catch (error) {
        yield put(GetGalleryFailed(error))
    }
}
// function* creategallery(action:any):any {
//     const { payload } = action
//     try {
//         const result = yield call(gallery.create, payload)
//         yield put(AddgallerySuccess(result.data))
        
//     } catch (error) {
//         yield put(AddgalleryFailed(error))
//     }
// }
// function* Editgallery(action:any):any {
//     const {payload} = action
//     try {
//         const result = yield call(gallery.update, payload)
//         yield put(EditgallerySuccess(result.data))
//     } catch (error) {
//        yield put (EditgalleryFailed(error)) 
//     }
// }

// function* Deletegallery(action:any):any {
//     const {payload} = action
//     try {
//         const result = yield call(gallery.deleted, payload)
//         yield put(DelgallerySuccess(result))
//     } catch (error) {
//        yield put (DelgalleryFailed(error)) 
//     }
// }

export {
    handleGallery,
    // creategallery,
    // Editgallery,
    // Deletegallery
}