import { call, put } from 'redux-saga/effects'
import pohe from '@/src/api/purchasing/purchaseHeader'
import { GetPoheSuccess, GetPoheFailed, AddPoheFailed, AddPoheSuccess, EditPoheSuccess, EditPoheFailed, DelPoheFailed, DelPoheSuccess } from '../../action/purchasing/purchaseHeaderAction'

function* handlePohe(action: any): any {
    try {
        const { page } = action;
        const result = yield call(pohe.list, page)
        yield put(GetPoheSuccess(result.data))
    } catch (error) {
        yield put(GetPoheFailed(error))
    }
}
function* createPohe(action: any): any {
    const { payload } = action
    try {
        const result = yield call(pohe.create, payload)
        yield put(AddPoheSuccess(result.data))

    } catch (error) {
        yield put(AddPoheFailed(error))
    }
}
function* EditPohe(action: any): any {
    const { payload } = action
    try {
        const result = yield call(pohe.update, payload)
        yield put(EditPoheSuccess(result.data))
    } catch (error) {
        yield put(EditPoheFailed(error))
    }
}

function* DeletePohe(action: any): any {
    const { payload } = action
    try {
        const result = yield call(pohe.deleted, payload)
        yield put(DelPoheSuccess(result))
    } catch (error) {
        yield put(DelPoheFailed(error))
    }
}

export {
    handlePohe,
    createPohe,
    EditPohe,
    DeletePohe
}