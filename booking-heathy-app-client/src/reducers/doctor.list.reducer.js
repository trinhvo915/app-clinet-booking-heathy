import {
    GET_DOCTOR_LIST,
    GET_DOCTOR_LIST_SUCCESS,
    GET_DOCTOR_LIST_FAILED
  } from "../actions/doctor.list.action";
  
const initialState = {
    doctors: {},
    loading: false,
    failed: false
};

export function doctorsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DOCTOR_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_DOCTOR_LIST_SUCCESS:
        return Object.assign({}, state, {
          doctors: action.payload,
          loading: false,
          failed: false
        });
      case GET_DOCTOR_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  