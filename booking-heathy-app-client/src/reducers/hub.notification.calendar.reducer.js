import {
    CONNECT_HUB_NOTICATION_CALENDAR,
    CONNECT_HUB_NOTICATION_CALENDAR_SUCCESS,
    CONNECT_HUB_NOTICATION_CALENDAR_FAILED
} from "../actions/hub.notification.calendar.action";

const initialState = {
    hubConnectionCalendar: null,
    loading: false,
    failed: false
};

export function connectHubNotificationCalendarReducer(state = initialState, action) {
    switch (action.type) {
        case CONNECT_HUB_NOTICATION_CALENDAR:
            return Object.assign({}, state, {
                loading: true,
                failed: false
            });
        case CONNECT_HUB_NOTICATION_CALENDAR_SUCCESS:
            return Object.assign({}, state, {
                hubConnectionCalendar: action.payload,
                loading: false,
                failed: false
            });
        case CONNECT_HUB_NOTICATION_CALENDAR_FAILED:
            return Object.assign({}, state, {
                loading: false,
                failed: true
            });
        default:
            return state;
    }
}
