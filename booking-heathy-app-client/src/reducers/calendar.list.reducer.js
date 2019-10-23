import {
    GET_CALENDAR_BY_USER,
    GET_CALENDAR_BY_USER_SUCCESS,
    GET_CALENDAR_BY_USER_FAILED
} from "../actions/calendar.list.action";

const initialState = {
    canlendarByUserList: [],
    loading: false,
    failed: false
};

export function calendarByUserListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CALENDAR_BY_USER:
            return Object.assign({}, state, {
                loading: true,
                failed: false
            });
        case GET_CALENDAR_BY_USER_SUCCESS:
            return Object.assign({}, state, {
                canlendarByUserList: action.payload,
                loading: false,
                failed: false
            });
        case GET_CALENDAR_BY_USER_FAILED:
            return Object.assign({}, state, {
                loading: false,
                failed: true
            });
        default:
            return state;
    }
}
