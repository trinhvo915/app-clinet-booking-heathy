import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_USER,
    getUserSuccess,
    getUserFailed
} from "../actions/get.user.action";
import { getUserApi } from '../util/api/call-api';

function* getUser(action) {
  try {
    const payload = yield call(
      getUserApi
    );
    yield put(getUserSuccess(payload));
  } catch (error) {
    yield put(getUserFailed());
  }
}
export function* watchUserAsync() {
  yield takeLatest(GET_USER, getUser);
}