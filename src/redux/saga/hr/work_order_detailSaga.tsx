import { call, put } from 'redux-saga/effects'
import Wode from '../../../api/hr/work_order_detail'
import { GetWodeSuccess, GetWodeFailed, AddWodeSuccess, AddWodeFailed, FindWodeSuccess, FindWodeFailed, EditWodeSuccess, EditWodeFailed, DeleteWodeSuccess, DeleteWodeFailed } from '../../action/hr/work_order_detailAction'

function* handleFindWode(): any {
    try { 
        const result = yield call(Wode.findData)
        yield put(GetWodeSuccess(result))
    } catch (error) {
        yield put(GetWodeFailed(error))
    }
}

function* handleFindOneWode(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Wode.findOne, payload)
        yield put(FindWodeSuccess(result.data))
    } catch (error) {
        yield put(FindWodeFailed(error))
    }
}
 
function* handleAddWode(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Wode.createWode, payload)
        yield put(AddWodeSuccess(result.data))
    } catch (error) {
        yield put(AddWodeFailed(error))
    }
}

function* handleEditWode(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Wode.updateWode, payload)
        yield put(EditWodeSuccess(result.data))
    } catch (error) {
        yield put(EditWodeFailed(error))
    }
}

function* handleDeleteWode(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Wode.deleteWode, payload)
        yield put(DeleteWodeSuccess(result.data))
    } catch (error) {
        yield put(DeleteWodeFailed(error))
    }
}

export {
    handleFindWode,
    handleFindOneWode,
    handleAddWode,
    handleEditWode,
    handleDeleteWode
}
