import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_BOOKEDS_DOCTOR_CLINIC_LIST,
    getBookedsDoctorListSuccess,
    getBookedsDoctorListFailed
} from "../actions/booked.doctor.list.action";
import { getBookedsForDoctorApi } from '../util/api/call-api';

function* getBookedsDoctorList(action) {
  try {
    const payload = yield call(
        getBookedsForDoctorApi, action.payload.params
    );
    yield put(getBookedsDoctorListSuccess(payload));
  } catch (error) {
    yield put(getBookedsDoctorListFailed());
  }
}

export function* watchGetBookedsDoctorListAsync() {
  yield takeLatest(GET_BOOKEDS_DOCTOR_CLINIC_LIST, getBookedsDoctorList);
}