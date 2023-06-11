import { combineReducers } from "redux";
import RegionsReduce from "./master/regionsReducer";
import CountriesReduce from "./master/countriesReducer";
import ProvincesReduce from "./master/provincesReducer";
import CityReduce from "./master/cityReducer";
import PolicyReduce from "./master/policyReducer";
import PriceItemsReduce from "./master/priceItemsReducer";
import ServiceTasksReduce from "./master/serviceTasksReducer";
import CategoryReduce from "./master/categoryReducer";
import HotelsReduce from "./hotel/hotelsReducer";
import FacilitiesReduce from "./hotel/facilitiesReducer";
import FacPriceHistReduce from "./hotel/facilityPriceHistoryReducer";
import CategoryGroupReduce from "./master/categoryGroupReducer";
import AddressReduce from "./master/addressReducer";
import FacilityPhotosReduce from "./hotel/facilityPhotosReducer";
import vendorReduce from "./purchasing/vendorReducer";
import vendorProductReduce from "./purchasing/vendorProductReducer";
import stockReduce from "./purchasing/stockReducer";
import stodetReduce from "./purchasing/stockDetailReducer";
import poheReduce from "./purchasing/purchasingHeaderReducer";
import podetReduce from "./purchasing/purchaseDetailReducer";
import stopotReduce from "./purchasing/stockPhotoReducer";

const rootReducer = combineReducers({
  regionsState: RegionsReduce,
  countriesState: CountriesReduce,
  provincesState: ProvincesReduce,
  cityState: CityReduce,
  policyState: PolicyReduce,
  priceItemsState: PriceItemsReduce,
  serviceTasksState: ServiceTasksReduce,
  categoryState: CategoryReduce,
  hotelsState: HotelsReduce,
  facilitiesState: FacilitiesReduce,
  facPriceHistState: FacPriceHistReduce,
  facilityPhotosState: FacilityPhotosReduce,
  categoryGroupState: CategoryGroupReduce,
  addressState: AddressReduce,
  vendorState: vendorReduce,
  vendorProductState: vendorProductReduce,
  stockState: stockReduce,
  stockDetailState: stodetReduce,
  poheState: poheReduce,
  podetState: podetReduce,
  stopotState: stopotReduce,
});

export default rootReducer;
