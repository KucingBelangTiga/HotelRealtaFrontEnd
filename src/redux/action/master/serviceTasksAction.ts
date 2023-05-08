import * as ActionServiceTasks from "../../constant/master/serviceTasksConstant";

export const GetServiceTasksRequest = () => ({
  type: ActionServiceTasks.GET_SERVICE_TASKS_REQUEST,
});

export const GetServiceTasksSuccess = (payload: any) => ({
  type: ActionServiceTasks.GET_SERVICE_TASKS_SUCCESS,
  payload,
});

export const GetServiceTasksFailed = (payload: any) => ({
  type: ActionServiceTasks.GET_SERVICE_TASKS_FAILED,
  payload,
});

export const AddServiceTasksRequest = (payload: any) => ({
  type: ActionServiceTasks.ADD_SERVICE_TASKS_REQUEST,
  payload,
});

export const AddServiceTasksSuccess = (payload: any) => ({
  type: ActionServiceTasks.ADD_SERVICE_TASKS_SUCCESS,
  payload,
});

export const AddServiceTasksFailed = (payload: any) => ({
  type: ActionServiceTasks.ADD_SERVICE_TASKS_FAILED,
  payload,
});

export const EditServiceTasksRequest = (payload: any) => ({
  type: ActionServiceTasks.EDIT_SERVICE_TASKS_REQUEST,
  payload,
});

export const EditServiceTasksSuccess = (payload: any) => ({
  type: ActionServiceTasks.EDIT_SERVICE_TASKS_SUCCESS,
  payload,
});

export const EditServiceTasksFailed = (payload: any) => ({
  type: ActionServiceTasks.EDIT_SERVICE_TASKS_FAILED,
  payload,
});

export const DelServiceTasksRequest = (payload: any) => ({
  type: ActionServiceTasks.DEL_SERVICE_TASKS_REQUEST,
  payload,
});

export const DelServiceTasksSuccess = (payload: any) => ({
  type: ActionServiceTasks.DEL_SERVICE_TASKS_SUCCESS,
  payload,
});

export const DelServiceTasksFailed = (payload: any) => ({
  type: ActionServiceTasks.DEL_SERVICE_TASKS_FAILED,
  payload,
});

export const FindServiceTasksRequest = (payload: any) => ({
  type: ActionServiceTasks.FIND_SERVICE_TASKS_REQUEST,
  payload,
});

export const FindServiceTasksSuccess = (payload: any) => ({
  type: ActionServiceTasks.FIND_SERVICE_TASKS_SUCCESS,
  payload,
});

export const FindServiceTasksFailed = (payload: any) => ({
  type: ActionServiceTasks.FIND_SERVICE_TASKS_FAILED,
  payload,
});
