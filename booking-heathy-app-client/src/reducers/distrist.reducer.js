import {
    GET_DISTRIST_LIST,
    GET_DISTRIST_LIST_SUCCESS,
    GET_DISTRIST_LIST_FAILED
  } from "../actions/distrits.list.action";
  
  const initialState = {
    distrits: {},
    loading: false,
    failed: false
  };
  
  export function distritsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DISTRIST_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_DISTRIST_LIST_SUCCESS:
        return Object.assign({}, state, {
          distrits: action.payload,
          loading: false,
          failed: false
        });
      case GET_DISTRIST_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  