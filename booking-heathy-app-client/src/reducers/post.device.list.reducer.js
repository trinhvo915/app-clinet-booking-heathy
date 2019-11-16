import {
    GET_POST_DEVICE_CLINIC_LIST,
    GET_POST_DEVICE_CLINIC_LIST_SUCCESS,
    GET_POST_DEVICE_CLINIC_LIST_FAILED
  } from "../actions/post.device.list.action";
  
const initialState = {
    postDevices: {},
    loading: false,
    failed: false
};

export function postDeviceReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POST_DEVICE_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_POST_DEVICE_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          postDevices: action.payload,
          loading: false,
          failed: false
        });
      case GET_POST_DEVICE_CLINIC_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
  }
  