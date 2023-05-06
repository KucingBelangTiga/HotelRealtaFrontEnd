import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeDept from '../constant/hr/departmentConstant'
import * as ActionTypeEdhi from '../constant/hr/employee_department_historyConstant'
import * as ActionTypeEphi from '../constant/hr/employee_pay_historyConstant'
import * as ActionTypeEmp from '../constant/hr/employeeConstant'
import * as ActionTypeJoro from '../constant/hr/job_roleConstant'
import * as ActionTypeShift from '../constant/hr/shiftConstant'
import * as ActionTypeWode from '../constant/hr/work_order_detailConstant'
import * as ActionTypeWoro from '../constant/hr/work_ordersConstant'
import { handleFindDept, handleAddDept, handleFindOneDept, handleEditDept, handleDeleteDept } from './hr/departmentSaga'
import { handleFindEdhi, handleAddEdhi, handleFindOneEdhi, handleEditEdhi, handleDeleteEdhi } from './hr/employee_department_historySaga'
import { handleFindEphi, handleAddEphi, handleFindOneEphi, handleEditEphi, handleDeleteEphi } from './hr/employee_pay_historySaga'
import { handleFindEmp, handleAddEmp, handleFindOneEmp, handleEditEmp, handleDeleteEmp } from './hr/employeeSaga'
import { handleFindJoro, handleAddJoro, handleFindOneJoro, handleEditJoro, handleDeleteJoro } from './hr/job_roleSaga'
import { handleFindShift, handleAddShift, handleFindOneShift, handleEditShift, handleDeleteShift } from './hr/shiftSaga'
import { handleFindWode, handleAddWode, handleFindOneWode, handleEditWode, handleDeleteWode } from './hr/work_order_detailSaga'
import { handleFindWoro, handleAddWoro, handleFindOneWoro, handleEditWoro, handleDeleteWoro } from './hr/work_ordersSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionTypeDept.GET_DEPT_REQUEST, handleFindDept),
        takeEvery(ActionTypeDept.FIND_DEPT_REQUEST, handleFindOneDept),
        takeEvery(ActionTypeDept.ADD_DEPT_REQUEST, handleAddDept),
        takeEvery(ActionTypeDept.EDIT_DEPT_REQUEST, handleEditDept),
        takeEvery(ActionTypeDept.DELETE_DEPT_REQUEST, handleDeleteDept),

        takeEvery(ActionTypeEdhi.GET_EDHI_REQUEST, handleFindEdhi),
        takeEvery(ActionTypeEdhi.FIND_EDHI_REQUEST, handleFindOneEdhi),
        takeEvery(ActionTypeEdhi.ADD_EDHI_REQUEST, handleAddEdhi),
        takeEvery(ActionTypeEdhi.EDIT_EDHI_REQUEST, handleEditEdhi),
        takeEvery(ActionTypeEdhi.DELETE_EDHI_REQUEST, handleDeleteEdhi),

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
        takeEvery(ActionTypeWoro.DELETE_WORO_REQUEST, handleDeleteWoro)
    ])
}

export default watchAll 
