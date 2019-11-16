import {
    GET_POST_INFOR_CLINIC_LIST,
    GET_POST_INFOR_CLINIC_LIST_SUCCESS,
    GET_POST_INFOR_CLINIC_LIST_FAILED
  } from "../actions/post.infor.list.action";
  
const initialState = {
    postInfors: {},
    loading: false,
    failed: false
};

export function postInforReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POST_INFOR_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_POST_INFOR_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          postInfors: action.payload,
          loading: false,
          failed: false
        });
      case GET_POST_INFOR_CLINIC_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  