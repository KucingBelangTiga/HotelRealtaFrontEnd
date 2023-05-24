import { call, put } from 'redux-saga/effects'
import purchasing from '@/src/api/purchasing/vendor'
import { GetVendorFailed, GetVendorRequest, GetVendorSuccess, AddVendorFailed, AddVendorRequest, AddVendorSuccess, EditVendorFailed, EditVendorRequest, EditVendorSuccess, DelVendorFailed, DelVendorRequest, DelVendorSuccess, GetAllVendorFailed, GetAllVendorSuccess } from '../../action/purchasing/vendorAction'

function* handleVendor(action: any): any {
    try {
        const { page } = action
        const result = yield call(purchasing.list, page)
        yield put(GetVendorSuccess(result.data))
    } catch (error) {
        yield put(GetVendorFailed(error))
    }
}
function* getAllVendor(): any {
    try {
        const result = yield call(purchasing.getAll)
        yield put(GetVendorSuccess(result))
    } catch (error) {
        yield put(GetVendorFailed(error))
    }
}
function* createVendor(action: any): any {
    const { payload } = action
    try {
        const result = yield call(purchasing.create, payload)
        yield put(AddVendorSuccess(result.data))

    } catch (error) {
        yield put(AddVendorFailed(error))
    }
}
function* EditVendor(action: any): any {
    const { payload } = action
    try {
        const result = yield call(purchasing.update, payload)
        yield put(EditVendorSuccess(result.data))
    } catch (error) {
        yield put(EditVendorFailed(error))
    }
}

function* DeleteVendor(action: any): any {
    const { payload } = action
    try {
        const result = yield call(purchasing.deleted, payload)
        yield put(DelVendorSuccess(result))
    } catch (error) {
        yield put(DelVendorFailed(error))
    }
}

export {
    handleVendor,
    createVendor,
    EditVendor,
    DeleteVendor,
    getAllVendor
}