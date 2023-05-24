import { call, put } from 'redux-saga/effects'
import gallery from '@/src/api/purchasing/gallery'
import { GetGalleryFailed, GetGallerySuccess } from '../../action/purchasing/galleryAction'

function* handleGallery(action:any):any {
    try {
        const {page} = action
        const result = yield call(gallery.list, page)
        yield put(GetGallerySuccess(result.data))
    } catch (error) {
        yield put(GetGalleryFailed(error))
    }
}

export {
    handleGallery,
}