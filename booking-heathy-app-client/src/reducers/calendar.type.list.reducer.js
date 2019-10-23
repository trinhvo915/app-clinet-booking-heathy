import {
  GET_CALENDAR_TYPE_LIST,
  GET_CALENDAR_TYPE_LIST_SUCCESS,
  GET_CALENDAR_TYPE_LIST_FAILED
} from "../actions/calendar.type.list.action";

const initialState = {
  calendarTypeList: {},
  loading: false,
  failed: false
};

export function calendarTypeListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CALENDAR_TYPE_LIST:
      return Object.assign({}, state, {
        loading: true,
        failed: false
      });
    case GET_CALENDAR_TYPE_LIST_SUCCESS:
      return Object.assign({}, state, {
          calendarTypeList: action.payload,
        loading: false,
        failed: false
      });
    case GET_CALENDAR_TYPE_LIST_FAILED:
      return Object.assign({}, state, {
        loading: false,
        failed: true
      });
    default:
      return state;
  }
}