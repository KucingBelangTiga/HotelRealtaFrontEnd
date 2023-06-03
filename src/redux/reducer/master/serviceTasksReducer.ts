import * as ActionType from "../../constant/master/serviceTasksConstant";

const INIT_STATE = {
  serviceTasks: [],
  serviceTask: [],
  serviceTasksPage: [],
};

const ServiceTasksReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_SERVICE_TASKS_REQUEST:
      return { ...state };
    case ActionType.GET_SERVICE_TASKS_SUCCESS:
      return GetServiceTasksSuccessfully(state, action);
    case ActionType.GET_PAGE_SERVICE_TASKS_REQUEST:
      return { ...state };
    case ActionType.GET_PAGE_SERVICE_TASKS_SUCCESS:
      return GetPageServiceTasksSuccessfully(state, action);
    case ActionType.ADD_SERVICE_TASKS_REQUEST:
      return { ...state };
    case ActionType.ADD_SERVICE_TASKS_SUCCESS:
      return AddServiceTasksSuccessfully(state, action);
    case ActionType.FIND_SERVICE_TASKS_REQUEST:
      return { ...state };
    case ActionType.FIND_SERVICE_TASKS_SUCCESS:
      return FindServiceTasksSuccessfully(state, action);
    case ActionType.EDIT_SERVICE_TASKS_REQUEST:
      return { ...state };
    case ActionType.EDIT_SERVICE_TASKS_SUCCESS:
      return EditServiceTasksSuccessfully(state, action);
    case ActionType.DEL_SERVICE_TASKS_REQUEST:
      return { ...state };
    case ActionType.DEL_SERVICE_TASKS_SUCCESS:
      return DelServiceTasksSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetServiceTasksSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    serviceTasks: payload,
    // max: payload.reduce((accumulator: any, current: any) => {
    //   return accumulator.setaId > current.setaId ? accumulator : current;
    // }),
  };
};

const GetPageServiceTasksSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    serviceTasksPage: payload,
  };
};

const AddServiceTasksSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    serviceTasks: [...state.serviceTasks, payload],
  };
};

const FindServiceTasksSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    serviceTask: payload,
  };
};

const EditServiceTasksSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelServiceTasksSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default ServiceTasksReduce;
