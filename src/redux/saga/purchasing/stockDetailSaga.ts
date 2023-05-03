import { call, put } from 'redux-saga/effects'
import stockDetail from '@/src/api/purchasing/stockDetail'
import { GetStodetSuccess, GetStodetFailed, AddStodetFailed, AddStodetSuccess, EditStodetSuccess, EditStodetFailed, DelStodetSuccess, DelStodetFailed } from '../../action/purchasing/stockDetailAction'

function* handleStodet(action:any):any {
    const { payload } = action
    try {
        const result = yield call(stockDetail.list, payload)
        yield put(GetStodetSuccess(result))
    } catch (error) {
        yield put(GetStodetFailed(error))
    }
}
function* createStodet(action:any):any {
    const { payload } = action
    try {
        const result = yield call(stockDetail.create, payload)
        yield put(AddStodetSuccess(result.data))
        
    } catch (error) {
        yield put(AddStodetFailed(error))
    }
}
function* EditStodet(action:any):any {
    const {payload} = action
    try {
        const result = yield call(stockDetail.update, payload)
        yield put(EditStodetSuccess(result.data))
    } catch (error) {
       yield put (EditStodetFailed(error)) 
    }
}

function* DeleteStodet(action:any):any {
    const {payload} = action
    try {
        const result = yield call(stockDetail.deleted, payload)
        yield put(DelStodetSuccess(result))
    } catch (error) {
       yield put (DelStodetFailed(error)) 
    }
}

export {
    handleStodet,
    createStodet,
    EditStodet,
    DeleteStodet
}