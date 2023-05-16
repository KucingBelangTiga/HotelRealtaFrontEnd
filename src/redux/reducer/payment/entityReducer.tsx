import * as ActionTypeEntitys from "../../constant/payment/entityConstant";

const init_state = {
  entitys: [],
  entity: [],
};

const EntitysReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeEntitys.GET_ENTITYS_REQUEST:
      return { ...state };
    case ActionTypeEntitys.GET_ENTITYS_SUCCESS:
      return GetEntitys(state, action);
    case ActionTypeEntitys.ADD_ENTITYS_REQUEST:
      return { ...state };
    case ActionTypeEntitys.ADD_ENTITYS_SUCCESS:
      return AddEntitys(state, action);
    case ActionTypeEntitys.FIND_ENTITYS_REQUEST:
      return { ...state };
    case ActionTypeEntitys.FIND_ENTITYS_SUCCESS:
      return FindEntitys(state, action);
    case ActionTypeEntitys.EDIT_ENTITYS_REQUEST:
      return { ...state };
    case ActionTypeEntitys.EDIT_ENTITYS_SUCCESS:
      return EditEntitys(state, action);
    case ActionTypeEntitys.DEL_ENTITYS_REQUEST:
      return { ...state };
    case ActionTypeEntitys.DEL_ENTITYS_SUCCESS:
      return DeleteEntitys(state, action);
    default:
      return { ...state };
  }
};

const GetEntitys = (state: any, action: any) => {
  return {
    ...state,
    entitys: action.payload,
  };
};

const AddEntitys = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    entitys: [...state.entitys, payload],
  };
};

const FindEntitys = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    entity: payload,
  };
};

const EditEntitys = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteEntitys = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default EntitysReduce;
