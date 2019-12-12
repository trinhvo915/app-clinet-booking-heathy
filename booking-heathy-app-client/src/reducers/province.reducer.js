import {
    GET_PROVINCE,
    GET_PROVINCE_SUCCESS,
    GET_PROVINCE_FAILED
  } from "../actions/province.list.action";
  
  const initialState = {
    province: {},
    loading: false,
    failed: false
  };
  
  export function provinceReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PROVINCE:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_PROVINCE_SUCCESS:
        return Object.assign({}, state, {
          province: action.payload,
          loading: false,
          failed: false
        });
      case GET_PROVINCE_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  