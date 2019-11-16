import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_POST_CLINIC_LIST,
    getPostClinicListSuccess,
    getPostClinicListFailed
} from "../actions/post.list.action";
import { getPostTypeApi } from '../util/api/call-api';

function* getPostClinicList(action) {
  try {
    const payload = yield call(
        getPostTypeApi, action.payload.params
    );
    yield put(getPostClinicListSuccess(payload));
  } catch (error) {
    yield put(getPostClinicListFailed());
  }
}
export function* watchgetPostClinicListAsync() {
  yield takeLatest(GET_POST_CLINIC_LIST, getPostClinicList);
}