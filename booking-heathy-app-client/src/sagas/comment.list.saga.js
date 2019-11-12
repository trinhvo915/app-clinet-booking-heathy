import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_COMMENT_DOCTOR_CLINIC_LIST,
    getCommentDoctorClinicListSuccess,
    getCommentDoctorClinicListFailed
} from "../actions/comment.list.action";
import { getListCommentDoctorApi } from '../util/api/call-api';

function* getCommentDoctorList(action) {
  try {
    const payload = yield call(
        getListCommentDoctorApi, action.payload.params
    );
    yield put(getCommentDoctorClinicListSuccess(payload));
  } catch (error) {
    yield put(getCommentDoctorClinicListFailed());
  }
}
export function* watchgetCommentDoctorListAsync() {
  yield takeLatest(GET_COMMENT_DOCTOR_CLINIC_LIST, getCommentDoctorList);
}