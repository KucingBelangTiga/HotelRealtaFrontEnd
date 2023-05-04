import { combineReducers } from "redux";
import RegionsReduce from "./master/regionsReducer";
import CountriesReduce from "./master/countriesReducer";

const rootReducer = combineReducers({
  regionsState: RegionsReduce,
  countriesState: CountriesReduce,
});

export default rootReducer;
