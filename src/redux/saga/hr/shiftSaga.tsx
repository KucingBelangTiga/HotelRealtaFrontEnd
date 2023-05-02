import { call, put } from 'redux-saga/effects'
import Shift from '../../../api/hr/shift'
import { GetShiftSuccess, GetShiftFailed, AddShiftSuccess, AddShiftFailed, FindShiftSuccess, FindShiftFailed, EditShiftSuccess, EditShiftFailed, DeleteShiftSuccess, DeleteShiftFailed } from '../../action/hr/shiftAction'

function* handleFindShift(): any {
    try { 
        const result = yield call(Shift.findData)
        yield put(GetShiftSuccess(result))
    } catch (error) {
        yield put(GetShiftFailed(error))
    }
}

function* handleFindOneShift(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Shift.findOne, payload)
        yield put(FindShiftSuccess(result.data))
    } catch (error) {
        yield put(FindShiftFailed(error))
    }
}
 
function* handleAddShift(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Shift.createShift, payload)
        yield put(AddShiftSuccess(result.data))
    } catch (error) {
        yield put(AddShiftFailed(error))
    }
}

function* handleEditShift(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Shift.updateShift, payload)
        yield put(EditShiftSuccess(result.data))
    } catch (error) {
        yield put(EditShiftFailed(error))
    }
}

function* handleDeleteShift(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Shift.deleteShift, payload)
        yield put(DeleteShiftSuccess(result.data))
    } catch (error) {
        yield put(DeleteShiftFailed(error))
    }
}

export {
    handleFindShift,
    handleFindOneShift,
    handleAddShift,
    handleEditShift,
    handleDeleteShift
}
