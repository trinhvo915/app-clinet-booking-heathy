import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CALENDAR_BY_USER,
  getCalendarByUserSuccess,
  getCalendarByUserFailed

} from "../actions/calendar.list.action";
import Api from "../api/api.calendar";

function* getCalendarByUser(action) {
  try {
    const payload = yield call(Api.getCalendarByUser, action.payload.params);
    yield put(getCalendarByUserSuccess(payload));
  } catch (error) {
    yield put(getCalendarByUserFailed());
  }
}

export function* watchCalendarByUserAsync() {
  yield takeLatest(GET_CALENDAR_BY_USER, getCalendarByUser);
}
