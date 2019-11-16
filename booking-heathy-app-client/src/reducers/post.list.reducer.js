import {
    GET_POST_CLINIC_LIST,
    GET_POST_CLINIC_LIST_SUCCESS,
    GET_POST_CLINIC_LIST_SUCCESS_FAILED
  } from "../actions/post.list.action";
  
const initialState = {
    postClinics: {},
    loading: false,
    failed: false
};

export function postClinicReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POST_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_POST_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          postClinics: action.payload,
          loading: false,
          failed: false
        });
      case GET_POST_CLINIC_LIST_SUCCESS_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  