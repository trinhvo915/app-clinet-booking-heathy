import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_DOCTOR_LIST,
    getDoctorListSuccess,
    getDoctorListFailed
} from "../actions/doctor.list.action";
import { getDoctorListApi } from '../util/api/call-api';

function* getDoctorList(action) {
  try {
    const payload = yield call(
        getDoctorListApi
    );
    yield put(getDoctorListSuccess(payload));
  } catch (error) {
    yield put(getDoctorListFailed());
  }
}
export function* watchDoctorListAsync() {
  yield takeLatest(GET_DOCTOR_LIST, getDoctorList);
}