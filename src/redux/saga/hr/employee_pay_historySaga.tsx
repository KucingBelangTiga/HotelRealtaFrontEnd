import { call, put } from 'redux-saga/effects'
import Ephi from '../../../api/hr/employee_pay_history'
import { GetEphiSuccess, GetEphiFailed, AddEphiSuccess, AddEphiFailed, FindEphiSuccess, FindEphiFailed, EditEphiSuccess, EditEphiFailed, DeleteEphiSuccess, DeleteEphiFailed } from '../../action/hr/employee_pay_historyAction'

function* handleFindEphi(): any {
    try { 
        const result = yield call(Ephi.findData)
        yield put(GetEphiSuccess(result))
    } catch (error) {
        yield put(GetEphiFailed(error))
    }
}

function* handleFindOneEphi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Ephi.findOne, payload)
        yield put(FindEphiSuccess(result.data))
    } catch (error) {
        yield put(FindEphiFailed(error))
    }
}
 
function* handleAddEphi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Ephi.createEph, payload)
        yield put(AddEphiSuccess(result.data))
    } catch (error) {
        yield put(AddEphiFailed(error))
    }
}

function* handleEditEphi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Ephi.updateEph, payload)
        yield put(EditEphiSuccess(result.data))
    } catch (error) {
        yield put(EditEphiFailed(error))
    }
}

function* handleDeleteEphi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Ephi.deleteEph, payload)
        yield put(DeleteEphiSuccess(result.data))
    } catch (error) {
        yield put(DeleteEphiFailed(error))
    }
}

export {
    handleFindEphi,
    handleFindOneEphi,
    handleAddEphi,
    handleEditEphi,
    handleDeleteEphi
}
