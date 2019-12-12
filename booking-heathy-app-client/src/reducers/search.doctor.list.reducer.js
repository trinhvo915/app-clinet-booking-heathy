import {
    GET_DOCTOR_SEARCH_LIST,
    GET_DOCTOR_SEARCH_LIST_SUCCESS,
    GET_DOCTOR_SEARCH_LIST_FAILED
  } from "../actions/search.doctor.list.action";
  
  const initialState = {
    searchdoctors: {},
    loading: false,
    failed: false
  };
  
  export function searchDoctorsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DOCTOR_SEARCH_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_DOCTOR_SEARCH_LIST_SUCCESS:
        return Object.assign({}, state, {
          searchdoctors: action.payload,
          loading: false,
          failed: false
        });
      case GET_DOCTOR_SEARCH_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  