import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_JOB_LIST,
  getJobListSuccess,
  getJobListFailed
} from "../actions/job.list.action";
import Api from "../api/api.job";

function* getJobList(action) {
  try {
    const payload = yield call(Api.getJobList, action.payload.params);
    yield put(getJobListSuccess(payload));
  } catch (error) {
    yield put(getJobListFailed());
  }
}

export function* watchJobListSagasAsync() {
  yield takeLatest(GET_JOB_LIST, getJobList);
}
