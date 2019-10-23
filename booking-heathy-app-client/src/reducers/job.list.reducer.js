import {
    GET_JOB_LIST,
    GET_JOB_LIST_FAILED,
    GET_JOB_LIST_SUCCESS
  } from "../actions/job.list.action";
  
  const initialState = {
    jobList: {},
    loading: false,
    failed: false
  };
  
  export function jobListReducer(state = initialState, action) {
    switch (action.type) {
      case GET_JOB_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_JOB_LIST_SUCCESS:
        return Object.assign({}, state, {
          jobList: action.payload,
          loading: false,
          failed: false
        });
      case GET_JOB_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  