import {
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS
} from "../actions/profile.action";

const initialState = {
  profile: {},
  loading: false,
  failed: false
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return Object.assign({}, state, {
        loading: true,
        failed: false
      });
    case GET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        profile: action.payload,
        loading: false,
        failed: false
      });
    case GET_PROFILE_FAILED:
      return Object.assign({}, state, {
        loading: false,
        failed: true
      });
    default:
      return state;
  }
}
