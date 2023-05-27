import { call, put } from 'redux-saga/effects'
import facility from '@/src/api/hotel/facility'
import { GetFacilityFailed, GetFacilitySuccess } from '../../action/hotel/facilityAction'

function* handleFacility():any {
    try {
        const result = yield call(facility.list)
        yield put(GetFacilitySuccess(result.data))
    } catch (error) {
        yield put(GetFacilityFailed(error))
    }
}

export {
    handleFacility,
}