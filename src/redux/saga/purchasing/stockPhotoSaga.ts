import { call, put } from 'redux-saga/effects'
import stockPhoto from '@/src/api/purchasing/stockPhoto'
import { GetStockPhotoSuccess, GetStockPhotoFailed, AddStockPhotoFailed, AddStockPhotoSuccess, EditStockPhotoSuccess, EditStockPhotoFailed, DelStockPhotoSuccess, DelStockPhotoFailed } from '../../action/purchasing/stockPhotoAction'

function* handleStockPhoto(action:any):any {
    const { payload } = action
    try {
        const result = yield call(stockPhoto.list, payload)
        yield put(GetStockPhotoSuccess(result))
    } catch (error) {
        yield put(GetStockPhotoFailed(error))
    }
}
function* createStockPhoto(action:any):any {
    const { payload } = action
    try {
        const result = yield call(stockPhoto.create, payload)
        yield put(AddStockPhotoSuccess(result.data))
        
    } catch (error) {
        yield put(AddStockPhotoFailed(error))
    }
}
function* EditStockPhoto(action:any):any {
    const {payload} = action
    try {
        const result = yield call(stockPhoto.update, payload)
        yield put(EditStockPhotoSuccess(result.data))
    } catch (error) {
       yield put (EditStockPhotoFailed(error)) 
    }
}

function* DeleteStockPhoto(action:any):any {
    const {payload} = action
    try {
        const result = yield call(stockPhoto.deleted, payload)
        yield put(DelStockPhotoSuccess(result))
    } catch (error) {
       yield put (DelStockPhotoFailed(error)) 
    }
}

export {
    handleStockPhoto,
    createStockPhoto,
    EditStockPhoto,
    DeleteStockPhoto
}