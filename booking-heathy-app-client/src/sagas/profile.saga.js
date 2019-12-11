import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PROFILE,
  getProfileSuccess,
  getProfileFailed
} from "../actions/profile.action";
import { getUserProfileApi } from '../util/api/call-api';

function* getProfile() {
  try {
    const payload = yield call(getUserProfileApi);
    yield put(getProfileSuccess(payload));
  } catch (error) {
    yield put(getProfileFailed());
  }
}

export function* watchProfileSagasAsync() {
  yield takeLatest(GET_PROFILE, getProfile);
}
