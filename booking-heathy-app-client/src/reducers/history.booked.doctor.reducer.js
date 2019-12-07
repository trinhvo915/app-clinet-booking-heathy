import {
    GET_HISTORY_BOOKED_DOCTOR_LIST,
    GET_HISTORY_BOOKED_DOCTOR_LIST_SUCCESS,
    GET_HISTORY_BOOKED_DOCTOR_LIST_FAILED
  } from "../actions/historyBookedDoctor.list.action";
  
const initialState = {
    historyBookedDoctor: {},
    loading: false,
    failed: false
};

export function historyBookedDoctorReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HISTORY_BOOKED_DOCTOR_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_HISTORY_BOOKED_DOCTOR_LIST_SUCCESS:
        return Object.assign({}, state, {
          historyBookedDoctor: action.payload,
          loading: false,
          failed: false
        });
      case GET_HISTORY_BOOKED_DOCTOR_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  