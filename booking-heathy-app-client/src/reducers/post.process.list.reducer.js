import {
    GET_POST_PROCESS_CLINIC_LIST,
    GET_POST_PROCESS_CLINIC_LIST_SUCCESS,
    GET_POST_PROCESS_CLINIC_LIST_FAILED
  } from "../actions/post.process.list.action";
  
const initialState = {
    postProcess: {},
    loading: false,
    failed: false
};

export function postProcessReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POST_PROCESS_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_POST_PROCESS_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          postProcess: action.payload,
          loading: false,
          failed: false
        });
      case GET_POST_PROCESS_CLINIC_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  