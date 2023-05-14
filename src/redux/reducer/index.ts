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
});

export default rootReducer;
