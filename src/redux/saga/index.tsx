import { takeEvery, all } from 'redux-saga/effects'
import * as ActionTypeDept from '../constant/hr/departmentConstant'
import * as ActionTypeEdhi from '../constant/hr/employee_department_historyConstant'
import * as ActionTypeEphi from '../constant/hr/employee_pay_historyConstant'
import * as ActionTypeEmployee from '../constant/hr/employeeConstant'
import * as ActionTypeJoro from '../constant/hr/job_roleConstant'
import * as ActionTypeShift from '../constant/hr/shiftConstant'
import * as ActionTypeWode from '../constant/hr/work_order_detailConstant'
import * as ActionTypeWoro from '../constant/hr/work_ordersConstant'
import { handleFindDept, handleAddDept, handleFindOneDept, handleEditDept, handleDeleteDept } from './hr/departmentSaga'
import { handleFindEdhi, handleAddEdhi, handleFindOneEdhi, handleEditEdhi, handleDeleteEdhi } from './hr/employee_department_historySaga'
import { handleFindEphi, handleAddEphi, handleFindOneEphi, handleEditEphi, handleDeleteEphi } from './hr/employee_pay_historySaga'
import { handleFindEmp, handleAddEmp, handleFindOneEmp, handleEditEmp, handleAddPhoto,handleEditPhoto, handleDeleteEmp } from './hr/employeeSaga'
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

        //employee ada handle upload dan updatePhoto
    ])
}

export default watchAll 
