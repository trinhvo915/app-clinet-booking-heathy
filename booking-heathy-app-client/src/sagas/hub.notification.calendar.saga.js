import { put, takeLatest } from "redux-saga/effects";
import {
    CONNECT_HUB_NOTICATION_CALENDAR,
    connectHubNotificationCalendarSuccess,
    connectHubNotificationCalendarFailed

} from "../actions/hub.notification.calendar.action";
import HubNotification from "../helpers/connect.hub.notification";
import { appConfig } from "../config/app.config";

function* connectHubNotificationCalendar() {
  try {
    const payload = yield HubNotification.connectHubNotification(appConfig.notificationCalendarUrl);
    yield put(connectHubNotificationCalendarSuccess(payload));
  } catch (error) {
    yield put(connectHubNotificationCalendarFailed());
  }
}

export function* watchConnectHubNotificationCalendarAsync() {
  yield takeLatest(CONNECT_HUB_NOTICATION_CALENDAR, connectHubNotificationCalendar);
}
