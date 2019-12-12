import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_DOCTOR_SEARCH_LIST,
    getDoctorSearchListSuccess,
    getDoctorSearchListFailed
} from "../actions/search.doctor.list.action";
import { getSearchDoctorListApi } from '../util/api/call-api';

function* getDoctorSearchs(action) {
  try {
    const payload = yield call(
        getSearchDoctorListApi, action.payload.params
    );
    yield put(getDoctorSearchListSuccess(payload));
  } catch (error) {
    yield put(getDoctorSearchListFailed());
  }
}
export function* watchDoctorSearchListAsync() {
  yield takeLatest(GET_DOCTOR_SEARCH_LIST, getDoctorSearchs);
}