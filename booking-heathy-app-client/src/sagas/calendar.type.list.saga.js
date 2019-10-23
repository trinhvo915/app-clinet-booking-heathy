import { call, put, takeLatest } from "redux-saga/effects"
import { 
  GET_CALENDAR_TYPE_LIST, 
  getCalendarTypeListSuccess, 
  getCalendarTypeListFailed
} from "../actions/calendar.type.list.action";
import ApiCalendar from "../api/api.calendar";

function* getCalendarTypeList(action) {
  try {
    const payload = yield call(ApiCalendar.getCalendarTypeList, action.payload.params);
    yield put(getCalendarTypeListSuccess(payload));

  } catch (error) {
    yield put(getCalendarTypeListFailed());
  }
}

export function* watchCalendarTypeListSagasAsync() {
  yield takeLatest(GET_CALENDAR_TYPE_LIST, getCalendarTypeList);
}