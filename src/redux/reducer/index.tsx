import { combineReducers } from "redux";

import departmentReducer from "./hr/departmentReducer";
import edhiReducer from "./hr/employee_department_historyReducer";
import ephiReducer from "./hr/employee_pay_historyReducer";
import employeeReducer from "./hr/employeeReducer";
import joroReducer from "./hr/job_roleReducer";
import shiftReducer from "./hr/shiftReducer";
import wodeReducer from "./hr/work_order_detailReducer";
import woroReducer from "./hr/work_ordersReducer";

import HotelsReduce from "./hotel/hotelsReducer";
import FacilitiesReduce from "./hotel/facilitiesReducer";
import FacPriceHistReduce from "./hotel/facilityPriceHistoryReducer";
import FacilityPhotosReduce from "./hotel/facilityPhotosReducer";
// import CategoryGroupReduce from "./master/categoryGroupReducer";
// import AddressReduce from "./master/addressReducer";

import RegionsReduce from "./master/regionsReducer";
import CountriesReduce from "./master/countriesReducer";
import ProvincesReduce from "./master/provincesReducer";
import CityReduce from "./master/cityReducer";
import PolicyReduce from "./master/policyReducer";
import PriceItemsReduce from "./master/priceItemsReducer";
import ServiceTasksReduce from "./master/serviceTasksReducer";
import CategoryReduce from "./master/categoryReducer";

import UserReducer from './users/userReducer';
import UsersReducer from './users/usersReducer';
import UserRolesReducer from './users/user-rolesReducer';
import UserProfilesReducer from './users/user-profilesReducer';
import UserPasswordReducer from './users/user-passwordReducer';
import UserMembersReducer from './users/user-membersReducer';
import UserBonusPointsReducer from './users/user-bonus-pointsReducer';
import RolesReducer from './users/rolesReducer';

const hrReducer = combineReducers({
    deptState: departmentReducer,
    edhiState: edhiReducer,
    ephiState: ephiReducer,
    empState: employeeReducer,
    joroState: joroReducer,
    shiftState: shiftReducer,
    wodeState: wodeReducer,
    woroState: woroReducer,

    hotelsState: HotelsReduce,
    facilitiesState: FacilitiesReduce,
    facPriceHistState: FacPriceHistReduce,
    facilityPhotosState: FacilityPhotosReduce,
    // categoryGroupState: CategoryGroupReduce,
    // addressState: AddressReduce,

    regionsState: RegionsReduce,
    countriesState: CountriesReduce,
    provincesState: ProvincesReduce,
    cityState: CityReduce,
    policyState: PolicyReduce,
    priceItemsState: PriceItemsReduce,
    serviceTasksState: ServiceTasksReduce,
    categoryState: CategoryReduce,

    userState: UserReducer,
    usersState: UsersReducer,
    userrolesState: UserRolesReducer,
    userprofilesState: UserProfilesReducer,
    userpasswordState: UserPasswordReducer,
    usermembersState: UserMembersReducer,
    userbonuspointsState: UserBonusPointsReducer,
    rolesState: RolesReducer,
})

export default hrReducer
