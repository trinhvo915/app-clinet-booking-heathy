import {
    GET_COMMENT_DOCTOR_CLINIC_LIST,
    GET_COMMENT_DOCTOR_CLINIC_LIST_SUCCESS,
    GET_COMMENT_DOCTOR_CLINIC_LIST_LIST_FAILED
  } from "../actions/comment.list.action";
  
const initialState = {
    comments: {},
    loading: false,
    failed: false
};

export function commentReducer(state = initialState, action) {
    switch (action.type) {
      case GET_COMMENT_DOCTOR_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_COMMENT_DOCTOR_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          comments: action.payload,
          loading: false,
          failed: false
        });
      case GET_COMMENT_DOCTOR_CLINIC_LIST_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  