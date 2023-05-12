import { combineReducers } from "redux";
import RegionsReduce from "./master/regionsReducer";
import CountriesReduce from "./master/countriesReducer";
import ProvincesReduce from "./master/provincesReducer";
import CityReduce from "./master/cityReducer";
import PolicyReduce from "./master/policyReducer";
import PriceItemsReduce from "./master/priceItemsReducer";
import ServiceTasksReduce from "./master/serviceTasksReducer";
import CategoryReduce from "./master/categoryReducer";

const rootReducer = combineReducers({
  regionsState: RegionsReduce,
  countriesState: CountriesReduce,
  provincesState: ProvincesReduce,
  cityState: CityReduce,
  policyState: PolicyReduce,
  priceItemsState: PriceItemsReduce,
  serviceTasksState: ServiceTasksReduce,
  categoryState: CategoryReduce,
});

export default rootReducer;
