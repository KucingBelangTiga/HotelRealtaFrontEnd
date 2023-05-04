import { combineReducers } from "redux";
import RegionsReduce from "./master/regionsReducer";
import CountriesReduce from "./master/countriesReducer";
import ProvincesReduce from "./master/provincesReducer";
import CityReduce from "./master/cityReducer";

const rootReducer = combineReducers({
  regionsState: RegionsReduce,
  countriesState: CountriesReduce,
  provincesState: ProvincesReduce,
  cityState: CityReduce,
});

export default rootReducer;
