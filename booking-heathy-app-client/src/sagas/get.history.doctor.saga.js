import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_DOCTOR_BOOKER_FOR_USER,
    getHistoryDoctorSuccess,
    getHistoryDoctorFailed
} from "../actions/get.history.doctor.booked";
import { getDoctorHistoryListApi } from '../util/api/call-api';

function* getHistoryDoctorList() {
  try {
    const payload = yield call(
        getDoctorHistoryListApi
    );
    yield put(getHistoryDoctorSuccess(payload));
  } catch (error) {
    yield put(getHistoryDoctorFailed());
  }
}
export function* watchGetHistoryDoctorListAsync() {
  yield takeLatest(GET_DOCTOR_BOOKER_FOR_USER, getHistoryDoctorList);
}