import * as ActionType from '../../constant/hotel/facilityConstant'

const INIT_STATE = {
    facilitys: []
}

const facilityReduce = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_FACILITY_REQUEST:
            return { ...state }
        case ActionType.GET_FACILITY_SUCCESS:
            return GetFacilitysuccessfully(state, action)
        default:
            return { ...state };
    }
}

const GetFacilitysuccessfully = (state: any, action: any) => {
    return {
        ...state,
        facilitys: action.payload
    }
}
export default facilityReduce