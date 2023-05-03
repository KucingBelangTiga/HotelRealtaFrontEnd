import { call, put } from 'redux-saga/effects'
import vendorProduct from '@/src/api/purchasing/vendorProduct'
import { GetVeproSuccess, GetVeproFailed, AddVeproFailed, AddVeproSuccess, EditVeproSuccess, EditVeproFailed, DelVeproSuccess, DelVeproFailed } from '../../action/purchasing/vendorProductAction'

function* handleVendorProduct(action:any):any {
    const { payload } = action
    try {
        const result = yield call(vendorProduct.list, payload)
        yield put(GetVeproSuccess(result))
    } catch (error) {
        yield put(GetVeproFailed(error))
    }
}
function* createVendorProduct(action:any):any {
    const { payload } = action
    try {
        const result = yield call(vendorProduct.create, payload)
        yield put(AddVeproSuccess(result.data))
        
    } catch (error) {
        yield put(AddVeproFailed(error))
    }
}
function* EditVendorProduct(action:any):any {
    const {payload} = action
    try {
        const result = yield call(vendorProduct.update, payload)
        yield put(EditVeproSuccess(result.data))
    } catch (error) {
       yield put (EditVeproFailed(error)) 
    }
}

function* DeleteVendorProduct(action:any):any {
    const {payload} = action
    try {
        const result = yield call(vendorProduct.deleted, payload)
        yield put(DelVeproSuccess(result))
    } catch (error) {
       yield put (DelVeproFailed(error)) 
    }
}

export {
    handleVendorProduct,
    createVendorProduct,
    EditVendorProduct,
    DeleteVendorProduct
}