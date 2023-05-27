import * as ActionType from '../../constant/hotel/facilityConstant'

export const GetFacilityRequest = () => ({
    type: ActionType.GET_FACILITY_REQUEST
})

export const GetFacilitySuccess = (payload:any) =>({
    type: ActionType.GET_FACILITY_SUCCESS,
    payload
})

export const GetFacilityFailed = (payload:any) =>({
    type: ActionType.GET_FACILITY_FAILED,
    payload
})

