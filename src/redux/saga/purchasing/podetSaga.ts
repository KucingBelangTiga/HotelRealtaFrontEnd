import { call, put } from 'redux-saga/effects'
import purchaseDetail from '@/src/api/purchasing/purchaseDetail'
import { GetPodetFailed, GetPodetSuccess, AddPodetFailed, AddPodetSuccess, EditPodetFailed, EditPodetSuccess, DelPodetFailed, DelPodetSuccess } from '../../action/purchasing/purchaseDetailAction'

function* handlePodet(action:any):any {
    const { payload } = action
    try {
        const result = yield call(purchaseDetail.list, payload)
        yield put(GetPodetSuccess(result))
    } catch (error) {
        yield put(GetPodetFailed(error))
    }
}
function* createPodet(action:any):any {
    const { payload } = action
    try {
        const result = yield call(purchaseDetail.create, payload)
        yield put(AddPodetSuccess(result.data))
        
    } catch (error) {
        yield put(AddPodetFailed(error))
    }
}
function* EditPodet(action:any):any {
    const {payload} = action
    try {
        const result = yield call(purchaseDetail.update, payload)
        yield put(EditPodetSuccess(result.data))
    } catch (error) {
       yield put (EditPodetFailed(error)) 
    }
}

function* DeletePodet(action:any):any {
    const {payload} = action
    try {
        const result = yield call(purchaseDetail.deleted, payload)
        yield put(DelPodetSuccess(result))
    } catch (error) {
       yield put (DelPodetFailed(error)) 
    }
}

export {
    handlePodet,
    createPodet,
    EditPodet,
    DeletePodet
}