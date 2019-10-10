import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PROFILE,
  getProfileSuccess,
  getProfileFailed
} from "../actions/profile.action";
import Api from "../api/api";

function* getProfile() {
  try {
    const payload = yield call(Api.getProfile);
    yield put(getProfileSuccess(payload));
  } catch (error) {
    yield put(getProfileFailed());
  }
}

export function* watchProfileSagasAsync() {
  yield takeLatest(GET_PROFILE, getProfile);
}
