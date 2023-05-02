import { call, put } from 'redux-saga/effects'
import Department from '../../../api/hr/department'
import { GetDeptSuccess, GetDeptFailed, AddDeptSuccess, AddDeptFailed, FindDeptSuccess, FindDeptFailed, EditDeptSuccess, EditDeptFailed, DeleteDeptSuccess, DeleteDeptFailed } from '../../action/hr/departmentAction'

function* handleFindDept(): any {
    try { 
        const result = yield call(Department.findData)
        yield put(GetDeptSuccess(result)) 
    } catch (error) {
        yield put(GetDeptFailed(error)) 
    }
}

function* handleFindOneDept(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Department.findOne, payload)
        yield put(FindDeptSuccess(result.data))
    } catch (error) {
        yield put(FindDeptFailed(error))
    }
}
 
function* handleAddDept(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Department.createDept, payload)
        yield put(AddDeptSuccess(result.data))
    } catch (error) {
        yield put(AddDeptFailed(error))
    }
}

function* handleEditDept(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Department.updateDept, payload)
        yield put(EditDeptSuccess(result.data))
    } catch (error) {
        yield put(EditDeptFailed(error))
    }
}

function* handleDeleteDept(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Department.deleteDept, payload)
        yield put(DeleteDeptSuccess(result.data))
    } catch (error) {
        yield put(DeleteDeptFailed(error))
    }
}

export {
    handleFindDept,
    handleFindOneDept,
    handleAddDept,
    handleEditDept,
    handleDeleteDept
}
