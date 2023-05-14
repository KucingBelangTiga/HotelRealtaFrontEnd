import { combineReducers } from "redux";
import vendorReduce from "./purchasing/vendorReducer";
import vendorProductReduce from "./purchasing/vendorProductReducer";
import stockReduce from "./purchasing/stockReducer";
import stodetReduce from "./purchasing/stockDetailReducer";
import poheReduce from "./purchasing/purchasingHeaderReducer";
import podetReduce from "./purchasing/purchaseDetailReducer";
import stopotReduce from "./purchasing/stockPhotoReducer";

const rootReducer = combineReducers({
    vendorState: vendorReduce,
    vendorProductState: vendorProductReduce,
    stockState: stockReduce,
    stockDetailState: stodetReduce,
    poheState: poheReduce,
    podetState: podetReduce,
    stopotState: stopotReduce
})

export default rootReducer