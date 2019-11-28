import {
    GET_DOCTOR_BOOKER_FOR_USER,
    GET_DOCTOR_BOOKER_FOR_USER_SUCCESS,
    GET_DOCTOR_BOOKER_FOR_USER_FAILED
} from "../actions/get.history.doctor.booked";

const initialState = {
    doctorsHistory: {},
    loading: false,
    failed: false
};

export function doctorsHistoryReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DOCTOR_BOOKER_FOR_USER:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_DOCTOR_BOOKER_FOR_USER_SUCCESS:
        return Object.assign({}, state, {
          doctorsHistory: action.payload,
          loading: false,
          failed: false
        });
      case GET_DOCTOR_BOOKER_FOR_USER_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }