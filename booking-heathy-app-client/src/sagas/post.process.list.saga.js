import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_POST_PROCESS_CLINIC_LIST,
    getPostProcessClinicListSuccess,
    getPostProcessClinicListFailed
} from "../actions/post.process.list.action";
import { getPostTypeApi } from '../util/api/call-api';

function* getPostProcessList(action) {
  try {
    const payload = yield call(
        getPostTypeApi, action.payload.params
    );
    yield put(getPostProcessClinicListSuccess(payload));
  } catch (error) {
    yield put(getPostProcessClinicListFailed());
  }
}
export function* watchgetPostProcessListAsync() {
  yield takeLatest(GET_POST_PROCESS_CLINIC_LIST, getPostProcessList);
}