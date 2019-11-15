import {
    GET_POST_TYPE,
    GET_POST_TYPE_SUCCESS,
    GET_POST_TYPE_FAILED
  } from "../actions/post.type.list.action";
  
const initialState = {
    postTypes: {},
    loading: false,
    failed: false
};

export function postTypeReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POST_TYPE:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_POST_TYPE_SUCCESS:
        return Object.assign({}, state, {
          postTypes: action.payload,
          loading: false,
          failed: false
        });
      case GET_POST_TYPE_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  