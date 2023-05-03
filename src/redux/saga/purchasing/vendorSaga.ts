import { call, put } from 'redux-saga/effects'
import purchasing from '@/src/api/purchasing/vendor'
import { GetVendorFailed, GetVendorRequest, GetVendorSuccess, AddVendorFailed, AddVendorRequest, AddVendorSuccess, EditVendorFailed, EditVendorRequest, EditVendorSuccess, DelVendorFailed, DelVendorRequest, DelVendorSuccess } from '../../action/purchasing/vendorAction'

function* handleVendor():any {
    try {
        const result = yield call(purchasing.list)
        yield put(GetVendorSuccess(result))
    } catch (error) {
        yield put(GetVendorFailed(error))
    }
}
function* createVendor(action:any):any {
    const { payload } = action
    try {
        const result = yield call(purchasing.create, payload)
        yield put(AddVendorSuccess(result.data))
        
    } catch (error) {
        yield put(AddVendorFailed(error))
    }
}
function* EditVendor(action:any):any {
    const {payload} = action
    try {
        const result = yield call(purchasing.update, payload)
        yield put(EditVendorSuccess(result.data))
    } catch (error) {
       yield put (EditVendorFailed(error)) 
    }
}

function* DeleteVendor(action:any):any {
    const {payload} = action
    try {
        const result = yield call(purchasing.deleted, payload)
        yield put(DelVendorSuccess(result))
    } catch (error) {
       yield put (DelVendorFailed(error)) 
    }
}

export {
    handleVendor,
    createVendor,
    EditVendor,
    DeleteVendor
}