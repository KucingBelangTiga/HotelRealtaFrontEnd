import { call, put } from 'redux-saga/effects'
import Edhi from '../../../api/hr/employee_department_history'
import { GetEdhiSuccess, GetEdhiFailed, AddEdhiSuccess, AddEdhiFailed, FindEdhiSuccess, FindEdhiFailed, EditEdhiSuccess, EditEdhiFailed, DeleteEdhiSuccess, DeleteEdhiFailed } from '../../action/hr/employee_department_historyAction'

function* handleFindEdhi(): any {
    try { 
        const result = yield call(Edhi.findData)
        yield put(GetEdhiSuccess(result))
    } catch (error) {
        yield put(GetEdhiFailed(error))
    }
}

function* handleFindOneEdhi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Edhi.findOne, payload)
        yield put(FindEdhiSuccess(result.data))
    } catch (error) {
        yield put(FindEdhiFailed(error))
    }
}
 
function* handleAddEdhi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Edhi.createEdh, payload)
        yield put(AddEdhiSuccess(result.data))
    } catch (error) {
        yield put(AddEdhiFailed(error))
    }
}

function* handleEditEdhi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Edhi.updateEdh, payload)
        yield put(EditEdhiSuccess(result.data))
    } catch (error) {
        yield put(EditEdhiFailed(error))
    }
}

function* handleDeleteEdhi(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Edhi.deleteEdh, payload)
        yield put(DeleteEdhiSuccess(result.data))
    } catch (error) {
        yield put(DeleteEdhiFailed(error))
    }
}

export {
    handleFindEdhi,
    handleFindOneEdhi,
    handleAddEdhi,
    handleEditEdhi,
    handleDeleteEdhi
}
