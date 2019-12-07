import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_HISTORY_BOOKED_DOCTOR_LIST,
    getHistoryBookedDoctorListSuccess,
    getHistoryBookedDoctorListFailed
} from "../actions/historyBookedDoctor.list.action";
import { getHistoryBookedDoctorApi } from '../util/api/call-api';

function* getHistoryBookedDoctorList() {
  try {
    const payload = yield call(
        getHistoryBookedDoctorApi
    );
    yield put(getHistoryBookedDoctorListSuccess(payload));
  } catch (error) {
    yield put(getHistoryBookedDoctorListFailed());
  }
}
export function* watchHistoryBookedDoctorListAsync() {
  yield takeLatest(GET_HISTORY_BOOKED_DOCTOR_LIST, getHistoryBookedDoctorList);
}