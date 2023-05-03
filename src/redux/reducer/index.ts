import { combineReducers } from "redux";
import vendorReduce from "./purchasing/vendorReducer";
import vendorProductReduce from "./purchasing/vendorProductReducer";
import stockReduce from "./purchasing/stockReducer";
import stodetReduce from "./purchasing/stockDetailReducer";

const rootReducer = combineReducers({
    vendorState: vendorReduce,
    vendorProductState: vendorProductReduce,
    stockState: stockReduce,
    stockDetailState: stodetReduce
})

export default rootReducer