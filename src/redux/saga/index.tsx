import { takeEvery, all } from 'redux-saga/effects'

import * as ActionTypeDept from '../constant/hr/departmentConstant'
import * as ActionTypeEdhi from '../constant/hr/employee_department_historyConstant'
import * as ActionTypeEphi from '../constant/hr/employee_pay_historyConstant'
import * as ActionTypeEmp from '../constant/hr/employeeConstant'
import * as ActionTypeJoro from '../constant/hr/job_roleConstant'
import * as ActionTypeShift from '../constant/hr/shiftConstant'
import * as ActionTypeWode from '../constant/hr/work_order_detailConstant'
import * as ActionTypeWoro from '../constant/hr/work_ordersConstant'

import * as ActionHotels from "../constant/hotel/hotelConstant";
import * as ActionFacilities from "../constant/hotel/facilitiesConstant";
import * as ActionFacPriceHist from "../constant/hotel/facilityPriceHistoryConstant";
import * as ActionFacilityPhotos from "../constant/hotel/facilityPhotosConstant";
// import * as ActionCategoryGroup from "../constant/master/categoryGroupConstant";
// import * as ActionAddress from "../constant/master/addressConstant";

import * as ActionRegions from "../constant/master/regionsContants";
import * as ActionCountries from "../constant/master/countriesConstant";
import * as ActionProvinces from "../constant/master/provincesConstants";
import * as ActionCity from "../constant/master/cityConstant";
import * as ActionPolicy from "../constant/master/policyConstant";
import * as ActionPriceItems from "../constant/master/priceItemsConstant";
import * as ActionServiceTasks from "../constant/master/serviceTasksConstant";
import * as ActionCategory from "../constant/master/categoryConstant";


import {
    handleRegions,
    handleAddRegions,
    findRegions,
    editRegions,
    deleteRegions,
  } from "./master/regionsSaga";
  import {
    handleCountries,
    handleAddCountries,
    findCountries,
    editCountries,
    deleteCountries,
  } from "./master/countriesSaga";
  import {
    handleProvinces,
    handleAddProvinces,
    findProvinces,
    editProvinces,
    deleteProvinces,
  } from "./master/provincesSaga";
  import {
    handleCity,
    handleAddCity,
    findCity,
    editCity,
    deleteCity,
  } from "./master/citySaga";
  import {
    handlePolicy,
    handleAddPolicy,
    findPolicy,
    editPolicy,
    deletePolicy,
  } from "./master/policySaga";
  import {
    handlePriceItems,
    handleAddPriceItems,
    findPriceItems,
    editPriceItems,
    deletePriceItems,
  } from "./master/priceItemsSaga";
  import {
    handleServiceTasks,
    handleAddServiceTasks,
    findServiceTasks,
    editServiceTasks,
    deleteServiceTasks,
  } from "./master/serviceTasksSaga";
  import {
    handleCategory,
    handleAddCategory,
    findCategory,
    editCategory,
    editCategoryPolicy,
    deleteCategory,
  } from "./master/categorySaga";

import { handleFindDept, handleAddDept, handleFindOneDept, handleEditDept, handleDeleteDept } from './hr/departmentSaga'
import { handleGetEdhi, handleFindEdhi, handleAddEdhi, handleFindOneEdhi, handleEditEdhi, handleDeleteEdhi } from './hr/employee_department_historySaga'
import { handleGetEphi, handleFindEphi, handleAddEphi, handleFindOneEphi, handleEditEphi, handleDeleteEphi } from './hr/employee_pay_historySaga'
import { handleFindEmp, handleAddEmp, handleFindOneEmp, handleEditEmp, handleDeleteEmp } from './hr/employeeSaga'
import { handleFindJoro, handleAddJoro, handleFindOneJoro, handleEditJoro, handleDeleteJoro } from './hr/job_roleSaga'
import { handleFindShift, handleAddShift, handleFindOneShift, handleEditShift, handleDeleteShift } from './hr/shiftSaga'
import { handleFindWode, handleAddWode, handleFindOneWode, handleEditWode, handleDeleteWode } from './hr/work_order_detailSaga'
import { handleFindWoro, handleAddWoro, handleFindOneWoro, handleEditWoro, handleDeleteWoro } from './hr/work_ordersSaga'

import {
    handleHotels,
    handleAddHotels,
    findHotels,
    editHotels,
    deleteHotels,
  } from "./hotel/hotelsSaga";
  
  import {
    handleFacilityPhotos,
    handleAddFacilityPhotos,
    editFacilityPhotos,
    deleteFacilityPhotos,
  } from "./hotel/facilityPhotosSaga";
  
  import {
    handleFacPriceHist,
    handleAddFacPriceHist,
  } from "./hotel/facilityPriceHistorySaga";
  
  import {
    handleFaci,
    handleFacilities,
    handleAddFacilities,
    findFacilities,
    editFacilities,
    deleteFacilities,
  } from "./hotel/facilitiesSaga";

//   import { handleAddress, findAddress } from "./master/addressSaga";
  
//   import { handleCategoryGroup } from "./master/categoryGroupSaga";

import * as ActionTypeUsers from '../constant/users/usersConstant';
import { handleGetUsers, handleFindUsers,
    handleCreateUsers, handleEditUsers, handleDelUsers  } from './users/usersSaga';
import * as ActionTypeUserRoles from '../constant/users/user-rolesConstant';
import { handleGetUserRoles, handleFindUserRoles,
     handleCreateUserRoles, handleEditUserRoles, handleDelUserRoles } from './users/user-rolesSaga';
import * as ActionTypeUserProfiles from '../constant/users/user-profilesConstant';
import { handleGetUserProfiles, handleFindUserProfiles, 
    handleCreateUserProfiles, handleEditUserProfiles, handleDelUserProfiles} from './users/user-profilesSaga';
import * as ActionTypeUserPassword from '../constant/users/user-passwordConstant';
import { handleGetUserPassword, handleFindUserPassword, handleCreateUserPassword,
    handleEditUserPassword, handleDelUserPassword } from './users/user-passwordSaga';
import * as ActionTypeUserMembers from '../constant/users/user-membersConstant';
import { handleGetUserMembers, handleFindUserMembers, handleCreateUserMembers,
    handleEditUserMembers, handleDelUserMembers } from './users/user-membersSaga';
import * as ActionTypeUserBonusPoints from '../constant/users/user-bonus-pointsConstant';
import { handleGetUserBonusPoints, handleFindUserBonusPoints, handleCreateUserBonusPoints,
    handleEditUserBonusPoints, handleDelUserBonusPoints} from './users/user-bonus-pointsSaga';
import * as ActionTypeRoles from '../constant/users/rolesConstant';
import { handleGetRoles, handleFindRoles, handleCreateRoles, handleEditRoles, handleDelRoles  } from './users/rolesSaga';

function* watchAll(){
    yield all([
        takeEvery(ActionTypeDept.GET_DEPT_REQUEST, handleFindDept),
        takeEvery(ActionTypeDept.FIND_DEPT_REQUEST, handleFindOneDept),
        takeEvery(ActionTypeDept.ADD_DEPT_REQUEST, handleAddDept),
        takeEvery(ActionTypeDept.EDIT_DEPT_REQUEST, handleEditDept),
        takeEvery(ActionTypeDept.DELETE_DEPT_REQUEST, handleDeleteDept),

        takeEvery(ActionTypeEdhi.GET_EDHIALL_REQUEST, handleGetEdhi),
        takeEvery(ActionTypeEdhi.GET_EDHI_REQUEST, handleFindEdhi),
        takeEvery(ActionTypeEdhi.FIND_EDHI_REQUEST, handleFindOneEdhi),
        takeEvery(ActionTypeEdhi.ADD_EDHI_REQUEST, handleAddEdhi),
        takeEvery(ActionTypeEdhi.EDIT_EDHI_REQUEST, handleEditEdhi),
        takeEvery(ActionTypeEdhi.DELETE_EDHI_REQUEST, handleDeleteEdhi),

        takeEvery(ActionTypeEphi.GET_EPHIALL_REQUEST, handleGetEphi),
        takeEvery(ActionTypeEphi.GET_EPHI_REQUEST, handleFindEphi),
        takeEvery(ActionTypeEphi.FIND_EPHI_REQUEST, handleFindOneEphi),
        takeEvery(ActionTypeEphi.ADD_EPHI_REQUEST, handleAddEphi),
        takeEvery(ActionTypeEphi.EDIT_EPHI_REQUEST, handleEditEphi),
        takeEvery(ActionTypeEphi.DELETE_EPHI_REQUEST, handleDeleteEphi),
        //add dan edit photo gajadi pake, gabung ke add dan edit
        takeEvery(ActionTypeEmp.GET_EMP_REQUEST, handleFindEmp),
        takeEvery(ActionTypeEmp.FIND_EMP_REQUEST, handleFindOneEmp),
        takeEvery(ActionTypeEmp.ADD_EMP_REQUEST, handleAddEmp),
        takeEvery(ActionTypeEmp.EDIT_EMP_REQUEST, handleEditEmp),
        // takeEvery(ActionTypeEmp.ADD_PHOTO_REQUEST, handleAddPhoto),
        // takeEvery(ActionTypeEmp.EDIT_PHOTO_REQUEST, handleEditPhoto),
        takeEvery(ActionTypeEmp.DELETE_EMP_REQUEST, handleDeleteEmp),

        takeEvery(ActionTypeJoro.GET_JORO_REQUEST, handleFindJoro),
        takeEvery(ActionTypeJoro.FIND_JORO_REQUEST, handleFindOneJoro),
        takeEvery(ActionTypeJoro.ADD_JORO_REQUEST, handleAddJoro),
        takeEvery(ActionTypeJoro.EDIT_JORO_REQUEST, handleEditJoro),
        takeEvery(ActionTypeJoro.DELETE_JORO_REQUEST, handleDeleteJoro),

        takeEvery(ActionTypeShift.GET_SHIFT_REQUEST, handleFindShift),
        takeEvery(ActionTypeShift.FIND_SHIFT_REQUEST, handleFindOneShift),
        takeEvery(ActionTypeShift.ADD_SHIFT_REQUEST, handleAddShift),
        takeEvery(ActionTypeShift.EDIT_SHIFT_REQUEST, handleEditShift),
        takeEvery(ActionTypeShift.DELETE_SHIFT_REQUEST, handleDeleteShift),

        takeEvery(ActionTypeWode.GET_WODE_REQUEST, handleFindWode),
        takeEvery(ActionTypeWode.FIND_WODE_REQUEST, handleFindOneWode),
        takeEvery(ActionTypeWode.ADD_WODE_REQUEST, handleAddWode),
        takeEvery(ActionTypeWode.EDIT_WODE_REQUEST, handleEditWode),
        takeEvery(ActionTypeWode.DELETE_WODE_REQUEST, handleDeleteWode),

        takeEvery(ActionTypeWoro.GET_WORO_REQUEST, handleFindWoro),
        takeEvery(ActionTypeWoro.FIND_WORO_REQUEST, handleFindOneWoro),
        takeEvery(ActionTypeWoro.ADD_WORO_REQUEST, handleAddWoro),
        takeEvery(ActionTypeWoro.EDIT_WORO_REQUEST, handleEditWoro),
        takeEvery(ActionTypeWoro.DELETE_WORO_REQUEST, handleDeleteWoro),

        //

    takeEvery(ActionHotels.GET_HOTELS_REQUEST, handleHotels),
    takeEvery(ActionHotels.ADD_HOTELS_REQUEST, handleAddHotels),
    takeEvery(ActionHotels.FIND_HOTELS_REQUEST, findHotels),
    takeEvery(ActionHotels.EDIT_HOTELS_REQUEST, editHotels),
    takeEvery(ActionHotels.DEL_HOTELS_REQUEST, deleteHotels),

    takeEvery(ActionFacilities.GET_FACI_REQUEST, handleFaci),

    takeEvery(ActionFacilities.GET_FACILITIES_REQUEST, handleFacilities),
    takeEvery(ActionFacilities.ADD_FACILITIES_REQUEST, handleAddFacilities),
    takeEvery(ActionFacilities.FIND_FACILITIES_REQUEST, findFacilities),
    takeEvery(ActionFacilities.EDIT_FACILITIES_REQUEST, editFacilities),
    takeEvery(ActionFacilities.DEL_FACILITIES_REQUEST, deleteFacilities),

    takeEvery(ActionFacPriceHist.GET_FACPRICEHIST_REQUEST, handleFacPriceHist),
    takeEvery(
      ActionFacPriceHist.ADD_FACPRICEHIST_REQUEST,
      handleAddFacPriceHist
    ),

    takeEvery(
      ActionFacilityPhotos.GET_FACILITY_PHOTOS_REQUEST,
      handleFacilityPhotos
    ),
    takeEvery(
      ActionFacilityPhotos.ADD_FACILITY_PHOTOS_REQUEST,
      handleAddFacilityPhotos
    ),
    takeEvery(
      ActionFacilityPhotos.EDIT_FACILITY_PHOTOS_REQUEST,
      editFacilityPhotos
    ),
    takeEvery(
      ActionFacilityPhotos.DEL_FACILITY_PHOTOS_REQUEST,
      deleteFacilityPhotos
    ),

    // takeEvery(
    //   ActionCategoryGroup.GET_CATEGORY_GROUP_REQUEST,
    //   handleCategoryGroup
    // ),

    // takeEvery(ActionAddress.GET_ADDRESS_REQUEST, handleAddress),
    // takeEvery(ActionAddress.FIND_ADDRESS_REQUEST, findAddress),

    //

    takeEvery(ActionRegions.GET_REGIONS_REQUEST, handleRegions),
    takeEvery(ActionRegions.ADD_REGIONS_REQUEST, handleAddRegions),
    takeEvery(ActionRegions.FIND_REGIONS_REQUEST, findRegions),
    takeEvery(ActionRegions.EDIT_REGIONS_REQUEST, editRegions),
    takeEvery(ActionRegions.DEL_REGIONS_REQUEST, deleteRegions),

    takeEvery(ActionCountries.GET_COUNTRIES_REQUEST, handleCountries),
    takeEvery(ActionCountries.ADD_COUNTRIES_REQUEST, handleAddCountries),
    takeEvery(ActionCountries.FIND_COUNTRIES_REQUEST, findCountries),
    takeEvery(ActionCountries.EDIT_COUNTRIES_REQUEST, editCountries),
    takeEvery(ActionCountries.DEL_COUNTRIES_REQUEST, deleteCountries),

    takeEvery(ActionProvinces.GET_PROVINCES_REQUEST, handleProvinces),
    takeEvery(ActionProvinces.ADD_PROVINCES_REQUEST, handleAddProvinces),
    takeEvery(ActionProvinces.FIND_PROVINCES_REQUEST, findProvinces),
    takeEvery(ActionProvinces.EDIT_PROVINCES_REQUEST, editProvinces),
    takeEvery(ActionProvinces.DEL_PROVINCES_REQUEST, deleteProvinces),

    takeEvery(ActionCity.GET_CITY_REQUEST, handleCity),
    takeEvery(ActionCity.ADD_CITY_REQUEST, handleAddCity),
    takeEvery(ActionCity.FIND_CITY_REQUEST, findCity),
    takeEvery(ActionCity.EDIT_CITY_REQUEST, editCity),
    takeEvery(ActionCity.DEL_CITY_REQUEST, deleteCity),

    takeEvery(ActionPolicy.GET_POLICY_REQUEST, handlePolicy),
    takeEvery(ActionPolicy.ADD_POLICY_REQUEST, handleAddPolicy),
    takeEvery(ActionPolicy.FIND_POLICY_REQUEST, findPolicy),
    takeEvery(ActionPolicy.EDIT_POLICY_REQUEST, editPolicy),
    takeEvery(ActionPolicy.DEL_POLICY_REQUEST, deletePolicy),

    takeEvery(ActionPriceItems.GET_PRICE_ITEMS_REQUEST, handlePriceItems),
    takeEvery(ActionPriceItems.ADD_PRICE_ITEMS_REQUEST, handleAddPriceItems),
    takeEvery(ActionPriceItems.FIND_PRICE_ITEMS_REQUEST, findPriceItems),
    takeEvery(ActionPriceItems.EDIT_PRICE_ITEMS_REQUEST, editPriceItems),
    takeEvery(ActionPriceItems.DEL_PRICE_ITEMS_REQUEST, deletePriceItems),

    takeEvery(ActionServiceTasks.GET_SERVICE_TASKS_REQUEST, handleServiceTasks),
    takeEvery(
      ActionServiceTasks.ADD_SERVICE_TASKS_REQUEST,
      handleAddServiceTasks
    ),
    takeEvery(ActionServiceTasks.FIND_SERVICE_TASKS_REQUEST, findServiceTasks),
    takeEvery(ActionServiceTasks.EDIT_SERVICE_TASKS_REQUEST, editServiceTasks),
    takeEvery(ActionServiceTasks.DEL_SERVICE_TASKS_REQUEST, deleteServiceTasks),

    takeEvery(ActionCategory.GET_CATEGORY_REQUEST, handleCategory),
    takeEvery(ActionCategory.ADD_CATEGORY_REQUEST, handleAddCategory),
    takeEvery(ActionCategory.FIND_CATEGORY_REQUEST, findCategory),
    takeEvery(ActionCategory.EDIT_CATEGORY_REQUEST, editCategory),
    takeEvery(ActionCategory.EDIT_CATEGORY_POLICY_REQUEST, editCategoryPolicy),
    takeEvery(ActionCategory.DEL_CATEGORY_REQUEST, deleteCategory),

    //

    takeEvery(ActionTypeUsers.GET_USERS_REQUEST, handleGetUsers),
        takeEvery(ActionTypeUsers.FIND_USERS_REQUEST, handleFindUsers),
        takeEvery(ActionTypeUsers.ADD_USERS_REQUEST, handleCreateUsers),
        takeEvery(ActionTypeUsers.EDIT_USERS_REQUEST, handleEditUsers),
        takeEvery(ActionTypeUsers.DEL_USERS_REQUEST, handleDelUsers),
        takeEvery(ActionTypeUserRoles.GET_USERROLES_REQUEST, handleGetUserRoles),
        takeEvery(ActionTypeUserRoles.FIND_USERROLES_REQUEST, handleFindUserRoles),
        takeEvery(ActionTypeUserRoles.ADD_USERROLES_REQUEST, handleCreateUserRoles),
        takeEvery(ActionTypeUserRoles.EDIT_USERROLES_REQUEST, handleEditUserRoles),
        takeEvery(ActionTypeUserRoles.DEL_USERROLES_REQUEST, handleDelUserRoles),
        takeEvery(ActionTypeUserProfiles.GET_USERPROFILES_REQUEST, handleGetUserProfiles),
        takeEvery(ActionTypeUserProfiles.FIND_USERPROFILES_REQUEST, handleFindUserProfiles),
        takeEvery(ActionTypeUserProfiles.ADD_USERPROFILES_REQUEST, handleCreateUserProfiles),
        takeEvery(ActionTypeUserProfiles.EDIT_USERPROFILES_REQUEST, handleEditUserProfiles),
        takeEvery(ActionTypeUserProfiles.DEL_USERPROFILES_REQUEST, handleDelUserProfiles),
        takeEvery(ActionTypeUserPassword.GET_USERPASSWORD_REQUEST, handleGetUserPassword),
        takeEvery(ActionTypeUserPassword.FIND_USERPASSWORD_REQUEST, handleFindUserPassword),
        takeEvery(ActionTypeUserPassword.ADD_USERPASSWORD_REQUEST, handleCreateUserPassword),
        takeEvery(ActionTypeUserPassword.EDIT_USERPASSWORD_REQUEST, handleEditUserPassword),
        takeEvery(ActionTypeUserPassword.DEL_USERPASSWORD_REQUEST, handleDelUserPassword), 
        takeEvery(ActionTypeUserMembers.GET_USERMEMBERS_REQUEST, handleGetUserMembers),
        takeEvery(ActionTypeUserMembers.FIND_USERMEMBERS_REQUEST, handleFindUserMembers),
        takeEvery(ActionTypeUserMembers.ADD_USERMEMBERS_REQUEST, handleCreateUserMembers),
        takeEvery(ActionTypeUserMembers.EDIT_USERMEMBERS_REQUEST, handleEditUserMembers),
        takeEvery(ActionTypeUserMembers.DEL_USERMEMBERS_REQUEST, handleDelUserMembers),
        takeEvery(ActionTypeUserBonusPoints.GET_USERBONUSPOINTS_REQUEST, handleGetUserBonusPoints),
        takeEvery(ActionTypeUserBonusPoints.FIND_USERBONUSPOINTS_REQUEST, handleFindUserBonusPoints),
        takeEvery(ActionTypeUserBonusPoints.ADD_USERBONUSPOINTS_REQUEST, handleCreateUserBonusPoints),
        takeEvery(ActionTypeUserBonusPoints.EDIT_USERBONUSPOINTS_REQUEST, handleEditUserBonusPoints),
        takeEvery(ActionTypeUserBonusPoints.DEL_USERBONUSPOINTS_REQUEST, handleDelUserBonusPoints),
        takeEvery(ActionTypeRoles.GET_ROLES_REQUEST, handleGetRoles),
        takeEvery(ActionTypeRoles.FIND_ROLES_REQUEST, handleFindRoles),
        takeEvery(ActionTypeRoles.ADD_ROLES_REQUEST, handleCreateRoles),
        takeEvery(ActionTypeRoles.EDIT_ROLES_REQUEST, handleEditRoles),
        takeEvery(ActionTypeRoles.DEL_ROLES_REQUEST, handleDelRoles)

    ])
}

export default watchAll 
