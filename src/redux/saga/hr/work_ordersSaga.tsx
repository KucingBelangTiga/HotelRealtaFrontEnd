import { call, put } from 'redux-saga/effects'
import Woro from '../../../api/hr/work_orders'
import { GetWoroSuccess, GetWoroFailed, AddWoroSuccess, AddWoroFailed, FindWoroSuccess, FindWoroFailed, EditWoroSuccess, EditWoroFailed, DeleteWoroSuccess, DeleteWoroFailed } from '../../action/hr/work_ordersAction'

function* handleFindWoro(): any {
    try { 
        const result = yield call(Woro.findData)
        yield put(GetWoroSuccess(result))
    } catch (error) {
        yield put(GetWoroFailed(error))
    }
}

function* handleFindOneWoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Woro.findOne, payload)
        yield put(FindWoroSuccess(result.data))
    } catch (error) {
        yield put(FindWoroFailed(error))
    }
}
 
function* handleAddWoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Woro.createWoro, payload)
        yield put(AddWoroSuccess(result.data))
    } catch (error) {
        yield put(AddWoroFailed(error))
    }
}

function* handleEditWoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Woro.updateWoro, payload)
        yield put(EditWoroSuccess(result.data))
    } catch (error) {
        yield put(EditWoroFailed(error))
    }
}

function* handleDeleteWoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Woro.deleteWoro, payload)
        yield put(DeleteWoroSuccess(result.data))
    } catch (error) {
        yield put(DeleteWoroFailed(error))
    }
}

export {
    handleFindWoro,
    handleFindOneWoro,
    handleAddWoro,
    handleEditWoro,
    handleDeleteWoro
}
