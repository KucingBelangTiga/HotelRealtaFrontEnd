import { call, put } from 'redux-saga/effects'
import Joro from '../../../api/hr/job_role'
import { GetJoroSuccess, GetJoroFailed, AddJoroSuccess, AddJoroFailed, FindJoroSuccess, FindJoroFailed, EditJoroSuccess, EditJoroFailed, DeleteJoroSuccess, DeleteJoroFailed } from '../../action/hr/job_roleAction'

function* handleFindJoro(): any {
    try { 
        const result = yield call(Joro.findData)
        yield put(GetJoroSuccess(result))
    } catch (error) {
        yield put(GetJoroFailed(error))
    }
}

function* handleFindOneJoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Joro.findOne, payload)
        yield put(FindJoroSuccess(result))
    } catch (error) {
        yield put(FindJoroFailed(error))
    }
}
 
function* handleAddJoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Joro.createJoro, payload)
        yield put(AddJoroSuccess(result.data))
    } catch (error) {
        yield put(AddJoroFailed(error))
    }
}

function* handleEditJoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Joro.updateJoro, payload)
        yield put(EditJoroSuccess(result.data))
    } catch (error) {
        yield put(EditJoroFailed(error))
    }
}

function* handleDeleteJoro(action: any): any {
    const { payload } = action
    try {
        const result = yield call(Joro.deleteJoro, payload)
        yield put(DeleteJoroSuccess(result.data))
    } catch (error) {
        yield put(DeleteJoroFailed(error))
    }
}

export {
    handleFindJoro,
    handleFindOneJoro,
    handleAddJoro,
    handleEditJoro,
    handleDeleteJoro
}
