import { combineReducers } from "redux";
import HotelsReduce from "./hotel/hotelsReducer";
import FacilitiesReduce from "./hotel/facilitiesReducer";
import FacPriceHistReduce from "./hotel/facilityPriceHistoryReducer";
import CategoryGroupReduce from "./master/categoryGroupReducer";
import AddressReduce from "./master/addressReducer";
import FacilityPhotosReduce from "./hotel/facilityPhotosReducer";

const rootReducer = combineReducers({
  hotelsState: HotelsReduce,
  facilitiesState: FacilitiesReduce,
  facPriceHistState: FacPriceHistReduce,
  facilityPhotosState: FacilityPhotosReduce,
  categoryGroupState: CategoryGroupReduce,
  addressState: AddressReduce,
});

export default rootReducer;
