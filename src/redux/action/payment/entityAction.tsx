import * as ActionEntity from "../../constant/payment/entityConstant";

export const GetEntitysRequest = () => ({
  type: ActionEntity.GET_ENTITYS_REQUEST,
});

export const GetEntitysSuccess = (payload: any) => ({
  type: ActionEntity.GET_ENTITYS_SUCCESS,
  payload,
});

export const GetEntitysFailed = (payload: any) => ({
  type: ActionEntity.GET_ENTITYS_FAILED,
  payload,
});

export const AddEntitysRequest = (payload: any) => ({
  type: ActionEntity.ADD_ENTITYS_REQUEST,
  payload,
});

export const AddEntitysSuccess = (payload: any) => ({
  type: ActionEntity.ADD_ENTITYS_SUCCESS,
  payload,
});

export const AddEntitysFailed = (payload: any) => ({
  type: ActionEntity.ADD_ENTITYS_FAILED,
  payload,
});

export const FindEntitysRequest = (payload: any) => ({
  type: ActionEntity.FIND_ENTITYS_REQUEST,
  payload,
});

export const FindEntitysSuccess = (payload: any) => ({
  type: ActionEntity.FIND_ENTITYS_SUCCESS,
  payload,
});

export const FindEntitysFailed = (payload: any) => ({
  type: ActionEntity.FIND_ENTITYS_FAILED,
  payload,
});

export const EditEntitysRequest = (payload: any) => ({
  type: ActionEntity.EDIT_ENTITYS_REQUEST,
  payload,
});

export const EditEntitysSuccess = (payload: any) => ({
  type: ActionEntity.EDIT_ENTITYS_SUCCESS,
  payload,
});

export const EditEntitysFailed = (payload: any) => ({
  type: ActionEntity.EDIT_ENTITYS_FAILED,
  payload,
});

export const DeleteEntitysRequest = (payload: any) => ({
  type: ActionEntity.DEL_ENTITYS_REQUEST,
  payload,
});

export const DeleteEntitysSuccess = (payload: any) => ({
  type: ActionEntity.DEL_ENTITYS_SUCCESS,
  payload,
});

export const DeleteEntitysFailed = (payload: any) => ({
  type: ActionEntity.DEL_ENTITYS_FAILED,
  payload,
});
