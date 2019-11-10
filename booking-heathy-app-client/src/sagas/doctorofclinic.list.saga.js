import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_DOCTOR_OF_CLINIC_LIST,
    getDoctorOfClinicListSuccess,
    getDoctorOfClinicListFailed
} from "../actions/doctorsOfClinic.list.action";
import { getDoctorsOfClinicApi } from '../util/api/call-api';

function* getDoctorsOfClinicList(action) {
  try {
    const payload = yield call(
        getDoctorsOfClinicApi, action.payload.params
    );
    yield put(getDoctorOfClinicListSuccess(payload));
  } catch (error) {
    yield put(getDoctorOfClinicListFailed());
  }
}
export function* watchDoctorsOfClinicListAsync() {
  yield takeLatest(GET_DOCTOR_OF_CLINIC_LIST, getDoctorsOfClinicList);
}