import { takeEvery, all, take, takeLatest } from "redux-saga/effects";
import * as VendorType from '../constant/purchasing/vendorConstant'
import * as VeproType from '../constant/purchasing/vendorProductConstant'
import * as StockType from '../constant/purchasing/stockConstant'
import * as StodetType from '../constant/purchasing/stockDetailConstant'
import * as PoheType from '../constant/purchasing/purchaseHeaderConstant'
import * as PodetType from '../constant/purchasing/purchaseDetailConstant'
import * as StopotType from '../constant/purchasing/stockPhotoConstant'
import * as GalleryType from '../constant/purchasing/galleryConstant'
import { handleVendor, DeleteVendor, EditVendor, createVendor } from "./purchasing/vendorSaga";
import { handleVendorProduct, DeleteVendorProduct, EditVendorProduct, createVendorProduct } from './purchasing/vendorProductSaga'
import { handleStock, DeleteStock, EditStock, createStock } from "./purchasing/stockSaga";
import { handleStodet, DeleteStodet, EditStodet, createStodet } from "./purchasing/stockDetailSaga";
import { handlePohe, DeletePohe, EditPohe, createPohe } from "./purchasing/poheSaga";
import { handlePodet, DeletePodet, EditPodet, createPodet } from './purchasing/podetSaga'
import { handleStockPhoto, DeleteStockPhoto, EditStockPhoto, createStockPhoto } from './purchasing/stockPhotoSaga'
import { handleGallery } from './purchasing/gallerySaga'

function* watchAll() {
    yield all([
        takeEvery(VendorType.GET_VENDOR_REQUEST, handleVendor),
        takeEvery(VendorType.ADD_VENDOR_REQUEST, createVendor),
        takeEvery(VendorType.EDIT_VENDOR_REQUEST, EditVendor),
        takeEvery(VendorType.DEL_VENDOR_REQUEST, DeleteVendor),
        takeEvery(VeproType.GET_VEPRO_REQUEST, handleVendorProduct),
        takeEvery(VeproType.ADD_VEPRO_REQUEST, createVendorProduct),
        takeEvery(VeproType.EDIT_VEPRO_REQUEST, EditVendorProduct),
        takeEvery(VeproType.DEL_VEPRO_REQUEST, DeleteVendorProduct),
        takeEvery(StockType.GET_STOCK_REQUEST, handleStock),
        takeEvery(StockType.ADD_STOCK_REQUEST, createStock),
        takeEvery(StockType.EDIT_STOCK_REQUEST, EditStock),
        takeEvery(StockType.DEL_STOCK_REQUEST, DeleteStock),
        takeEvery(StodetType.GET_STODET_REQUEST, handleStodet),
        takeEvery(StodetType.ADD_STODET_REQUEST, createStodet),
        takeEvery(StodetType.EDIT_STODET_REQUEST, EditStodet),
        takeEvery(StodetType.DEL_STODET_REQUEST, DeleteStodet),
        takeEvery(PoheType.GET_POHE_REQUEST, handlePohe),
        takeEvery(PoheType.ADD_POHE_REQUEST, createPohe),
        takeEvery(PoheType.EDIT_POHE_REQUEST, EditPohe),
        takeEvery(PoheType.DEL_POHE_REQUEST, DeletePohe),
        takeEvery(PodetType.GET_PODET_REQUEST, handlePodet),
        takeEvery(PodetType.ADD_PODET_REQUEST, createPodet),
        takeEvery(PodetType.EDIT_PODET_REQUEST, EditPodet),
        takeEvery(PodetType.DEL_PODET_REQUEST, DeletePodet),
        takeEvery(StopotType.GET_STOPOT_REQUEST, handleStockPhoto),
        takeEvery(StopotType.ADD_STOPOT_REQUEST, createStockPhoto),
        takeEvery(StopotType.EDIT_STOPOT_REQUEST, EditStockPhoto),
        takeEvery(StopotType.DEL_STOPOT_REQUEST, DeleteStockPhoto),
        takeEvery(GalleryType.GET_GALLERY_REQUEST, handleGallery)
    ])
}

export default watchAll