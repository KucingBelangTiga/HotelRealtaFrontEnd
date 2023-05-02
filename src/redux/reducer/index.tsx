import { combineReducers } from "redux";
import departmentReducer from "./hr/departmentReducer";
import edhiReducer from "./hr/employee_department_historyReducer";
import ephiReducer from "./hr/employee_pay_historyReducer";
import employeeReducer from "./hr/employeeReducer";
import joroReducer from "./hr/job_roleReducer";
import shiftReducer from "./hr/shiftReducer";
import wodeReducer from "./hr/work_order_detailReducer";
import woroReducer from "./hr/work_ordersReducer";

const hrReducer = combineReducers({
    deptState: departmentReducer,
    edhiState: edhiReducer,
    ephiState: ephiReducer,
    empState: employeeReducer,
    joroState: joroReducer,
    shiftState: shiftReducer,
    wodeState: wodeReducer,
    woroState: woroReducer
})

export default hrReducer
