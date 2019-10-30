import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILED
  } from "../actions/get.user.action";
  
  const initialState = {
    user: {},
    loading: false,
    failed: false
  };

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        loading: true,
        failed: false
      });
    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload,
        loading: false,
        failed: false
      });
    case GET_USER_FAILED:
      return Object.assign({}, state, {
        loading: false,
        failed: true
      });
    default:
      return state;
  }
}
  