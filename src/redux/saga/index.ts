import { takeEvery,all, take, takeLatest} from "redux-saga/effects";
import * as VendorType from '../constant/purchasing/vendorConstant'
import * as VeproType from '../constant/purchasing/vendorProductConstant'
import * as StockType from '../constant/purchasing/stockConstant'
import * as StodetType from '../constant/purchasing/stockDetailConstant'
import { handleVendor, DeleteVendor, EditVendor, createVendor } from "./purchasing/vendorSaga";
import { handleVendorProduct, DeleteVendorProduct, EditVendorProduct, createVendorProduct } from './purchasing/vendorProductSaga'
import { handleStock, DeleteStock, EditStock, createStock } from "./purchasing/stockSaga";
import { handleStodet, DeleteStodet, EditStodet, createStodet } from "./purchasing/stockDetailSaga";

function* watchAll(){
    yield all([
        takeEvery(VendorType.GET_VENDOR_REQUEST,handleVendor),
        takeEvery(VendorType.ADD_VENDOR_REQUEST,createVendor),
        takeEvery(VendorType.EDIT_VENDOR_REQUEST,EditVendor),
        takeEvery(VendorType.DEL_VENDOR_REQUEST,DeleteVendor),
        takeEvery(VeproType.GET_VEPRO_REQUEST,handleVendorProduct),
        takeEvery(VeproType.ADD_VEPRO_REQUEST,createVendorProduct),
        takeEvery(VeproType.EDIT_VEPRO_REQUEST,EditVendorProduct),
        takeEvery(VeproType.DEL_VEPRO_REQUEST,DeleteVendorProduct),
        takeEvery(StockType.GET_STOCK_REQUEST,handleStock),
        takeEvery(StockType.ADD_STOCK_REQUEST,createStock),
        takeEvery(StockType.EDIT_STOCK_REQUEST,EditStock),
        takeEvery(StockType.DEL_STOCK_REQUEST,DeleteStock),
        takeEvery(StodetType.GET_STODET_REQUEST,handleStodet),
        takeEvery(StodetType.ADD_STODET_REQUEST,createStodet),
        takeEvery(StodetType.EDIT_STODET_REQUEST,EditStodet),
        takeEvery(StodetType.DEL_STODET_REQUEST,DeleteStodet)
    ])
}

export default watchAll