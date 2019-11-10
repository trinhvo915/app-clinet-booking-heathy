import {
    GET_DOCTOR_OF_CLINIC_LIST,
    GET_DOCTOR_OF_CLINIC_LIST_SUCCESS,
    GET_DOCTOR_OF_CLINIC_LIST_FAILED
  } from "../actions/doctorsOfClinic.list.action";
  
const initialState = {
    clinic: {},
    loading: false,
    failed: false
};

export function clinicReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DOCTOR_OF_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_DOCTOR_OF_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          clinic: action.payload,
          loading: false,
          failed: false
        });
      case GET_DOCTOR_OF_CLINIC_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  