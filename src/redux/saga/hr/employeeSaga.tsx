import { call, put } from 'redux-saga/effects'
import Emp from '../../../api/hr/employee'
import { GetEmpSuccess, GetEmpFailed, AddEmpSuccess, AddEmpFailed, FindEmpSuccess, FindEmpFailed, EditEmpSuccess, EditEmpFailed, AddPhotoSuccess, AddPhotoFailed, EditPhotoSuccess, EditPhotoFailed, DeleteEmpSuccess, DeleteEmpFailed } from '../../action/hr/employeeAction'

function* handleFindEmp(): any {
    try { 
        const result = yield call(Emp.findData)
        yield put(GetEmpSuccess(result))
    } catch (error) {
        yield put(GetEmpFailed(error))
    }
}

function* handleFindOneEmp(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Emp.findOne, payload)
        yield put(FindEmpSuccess(result))
    } catch (error) {
        yield put(FindEmpFailed(error))
    }
}
 
function* handleAddEmp(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Emp.createEmp, payload)
        yield put(AddEmpSuccess(result.data))
    } catch (error) {
        yield put(AddEmpFailed(error))
    }
}

function* handleEditEmp(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Emp.updateEmp, payload)
        yield put(EditEmpSuccess(result.data))
    } catch (error) {
        yield put(EditEmpFailed(error))
    }
}

function* handleDeleteEmp(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Emp.deleteEmp, payload)
        yield put(DeleteEmpSuccess(result.data))
    } catch (error) {
        yield put(DeleteEmpFailed(error))
    }
}

export {
    handleFindEmp,
    handleFindOneEmp,
    handleAddEmp,
    handleEditEmp,
    handleDeleteEmp
}
