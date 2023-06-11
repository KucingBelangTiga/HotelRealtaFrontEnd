import { call, put } from 'redux-saga/effects'
import stock from '@/src/api/purchasing/stock'
import { GetStockFailed, GetStockSuccess, AddStockFailed, AddStockSuccess, EditStockFailed, EditStockSuccess, DelStockFailed, DelStockSuccess } from '../../action/purchasing/stockAction'

function* handleStock():any {
    try {
        const result = yield call(stock.list)
        yield put(GetStockSuccess(result))
    } catch (error) {
        yield put(GetStockFailed(error))
    }
}
function* createStock(action:any):any {
    const { payload } = action
    try {
        const result = yield call(stock.create, payload)
        yield put(AddStockSuccess(result.data))
        
    } catch (error) {
        yield put(AddStockFailed(error))
    }
}
function* EditStock(action:any):any {
    const {payload} = action
    try {
        const result = yield call(stock.update, payload)
        yield put(EditStockSuccess(result.data))
    } catch (error) {
       yield put (EditStockFailed(error)) 
    }
}

function* DeleteStock(action:any):any {
    const {payload} = action
    try {
        const result = yield call(stock.deleted, payload)
        yield put(DelStockSuccess(result))
    } catch (error) {
       yield put (DelStockFailed(error)) 
    }
}

export {
    handleStock,
    createStock,
    EditStock,
    DeleteStock
}